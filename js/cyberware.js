// -------------------- CYBERWARE GENERATION --------------------

// You can tune these weights to get the feel you want.
// “Common” shows up a lot. “Exotic” almost never.
const cyberwareRarityWeights = {
  "Common": 55,
  "Uncommon": 25,
  "Rare": 12,
  "Very Rare": 6,
  "Exotic": 2
};

function clamp(min, value, max) {
  return Math.max(min, Math.min(max, value));
}

function rollDie(sides) {
  return 1 + Math.floor(Math.random() * sides);
}

// Supports: "0", "7", "2d6", "4d6+2", "1d10-1"
function rollDiceExpression(expr) {
  if (expr == null) return 0;

  // If it's already a number, use it.
  if (typeof expr === "number") return expr;

  const s = String(expr).trim().toLowerCase();
  if (s === "" || s === "0") return 0;

  // Pure integer string?
  if (/^\d+$/.test(s)) return parseInt(s, 10);

  // NdM(+/-K) format
  const match = s.match(/^(\d+)d(\d+)([+-]\d+)?$/);
  if (!match) {
    console.warn("Invalid humanityLoss dice expression:", expr, "→ treating as 0");
    return 0;
  }

  const n = parseInt(match[1], 10);
  const die = parseInt(match[2], 10);
  const mod = match[3] ? parseInt(match[3], 10) : 0;

  let total = 0;
  for (let i = 0; i < n; i++) total += rollDie(die);
  return total + mod;
}

function weightedRandomPick(items, getWeightFn) {
  const totalWeight = items.reduce((sum, item) => sum + Math.max(0, getWeightFn(item)), 0);
  if (totalWeight <= 0) return null;

  let roll = Math.random() * totalWeight;
  for (const item of items) {
    roll -= Math.max(0, getWeightFn(item));
    if (roll <= 0) return item;
  }
  return items[items.length - 1] || null;
}

// Decide how “chrome-hungry” the character is.
// Returns the EMP value they refuse to go below (their personal threshold).
function pickEmpThreshold(startEmp) {
  // Weighted archetypes:
  // - Minimalist: barely any cyber (keeps EMP high)
  // - Cautious: some cyber, but stops fairly early
  // - Edgerunner: willing to drop lower
  // - Chromehead: will ride it down to 2
  const roll = Math.random();

  if (roll < 0.10) {
    // Minimalist: tries to keep EMP basically intact
    return clamp(2, startEmp - (Math.random() < 0.6 ? 0 : 1), startEmp);
  }
  if (roll < 0.45) {
    // Cautious: usually stops around 5-7 depending on start
    return clamp(2, startEmp - (2 + Math.floor(Math.random() * 2)), startEmp);
  }
  if (roll < 0.70) {
    // Edgerunner: will go to 3-4 often
    return clamp(2, startEmp - (4 + Math.floor(Math.random() * 2)), startEmp);
  }
  // Chromehead
  return 2;
}

function computeEmpFromHumanity(humanity) {
  // Tens place determines EMP (80 -> 8, 79 -> 7)
  return Math.max(2, Math.floor(humanity / 10));
}

// Check and consume slots on a parent cyberware if needed
function canConsumeSlots(state, parentName, slotsNeeded) {
  if (!slotsNeeded || slotsNeeded <= 0) return true;

  const parent = state.installedByName[parentName];
  if (!parent) return false;

  const parentSlots = parent.slots || 0;
  const used = state.slotsUsed[parentName] || 0;
  return (used + slotsNeeded) <= parentSlots;
}

function consumeSlots(state, parentName, slotsNeeded) {
  if (!slotsNeeded || slotsNeeded <= 0) return;
  state.slotsUsed[parentName] = (state.slotsUsed[parentName] || 0) + slotsNeeded;
}

// Installs an item (and its prerequisites) if possible, updating humanity/EMP.
// Returns true if it installed, false otherwise.
function tryInstallCyberware(state, item, catalog) {
  // No duplicates
  if (state.installedByName[item.name] && !item.stackable) return false;

// If stackable, enforce maxStacks if defined
if (item.stackable) {
  const count = state.installCounts[item.name] || 0;
  if (item.maxStacks != null && count >= item.maxStacks) return false;
}


  // First ensure prerequisites
  if (Array.isArray(item.requires)) {
    for (const req of item.requires) {
      const reqName = req.name;
      const parent = catalog.find(c => c.name === reqName);
      if (!parent) return false; // bad data

      // Install parent if missing
      if (!state.installedByName[reqName]) {
        const ok = tryInstallCyberware(state, parent, catalog);
        if (!ok) return false;
      }

      // Slot check (addon consumes parent's slots)
      if (!canConsumeSlots(state, reqName, req.requiresSlots || 0)) {
        return false;
      }
    }
  }

  // Humanity check: don’t install if it pushes EMP below threshold
function makeInstalledInstance(item) {
  // Copy the base item and attach a resolvedHL that never changes
  const resolvedHL = rollDiceExpression(item.humanityLoss);
  return { ...item, resolvedHL };
}
// Create a per-install copy so dice is rolled once and remembered
const installedItem = makeInstalledInstance(item);
const loss = installedItem.resolvedHL;

// If it costs 0 Humanity, it never risks EMP loss.
// Minimalists can still take it. (Optional cap shown below.)
if (loss === 0) {
  if (Array.isArray(installedItem.requires)) {
    for (const req of installedItem.requires) {
      consumeSlots(state, req.name, req.requiresSlots || 0);
    }
  }

  state.installed.push(installedItem);
  state.installedByName[installedItem.name] = installedItem;
  state.installCounts[installedItem.name] = (state.installCounts[installedItem.name] || 0) + 1;

  return true;
}

const prospectiveHumanity = state.humanityCurrent - loss;
const prospectiveEmp = computeEmpFromHumanity(prospectiveHumanity);

if (prospectiveEmp < state.empThreshold) return false;
if (prospectiveEmp < 2) return false;


  // Consume slots now that we're actually installing
  // Consume slots for prerequisites
if (Array.isArray(installedItem.requires)) {
  for (const req of installedItem.requires) {
    consumeSlots(state, req.name, req.requiresSlots || 0);
  }
}

state.installed.push(installedItem);
state.installedByName[installedItem.name] = installedItem;
state.installCounts[installedItem.name] = (state.installCounts[installedItem.name] || 0) + 1;

state.humanityCurrent = prospectiveHumanity;
state.empCurrent = prospectiveEmp;

return true;

}

function generateCyberwareFromCatalog(catalog, startEmp) {
  const humanityStart = startEmp * 10;
  const empThreshold = pickEmpThreshold(startEmp);

  const state = {
    installed: [],
    installedByName: {},
    installCounts: {},
    slotsUsed: {},

    humanityStart,
    humanityCurrent: humanityStart,

    empStart: startEmp,
    empCurrent: startEmp,
    empThreshold
  };

  // We attempt multiple picks, skipping ones that don't fit.
  // This prevents the generator from “getting stuck” if the remaining items are too costly.
  const maxAttempts = 200;

  for (let i = 0; i < maxAttempts; i++) {
    // Stop if we’re at threshold already (or one point above with too little humanity room)
    if (state.empCurrent <= state.empThreshold) break;

    // Build a pool of candidates we haven't installed yet
    const candidates = catalog.filter(item => !state.installedByName[item.name]);

    if (candidates.length === 0) break;

    // Pick by rarity weight
    const pick = weightedRandomPick(candidates, (item) => cyberwareRarityWeights[item.rarity] || 0);
    if (!pick) break;

    // Try install; if it fails, just continue and roll again
    tryInstallCyberware(state, pick, catalog);
  }
    const humanityLossTotal = state.humanityStart - state.humanityCurrent;
    const modifiers = computeCyberwareModifiers(state.installed, state.installCounts);
  return {
    installed: state.installed,
    installCounts: state.installCounts,
  modifiers,
    humanity: {
      start: state.humanityStart,
      current: state.humanityCurrent,
      lost: humanityLossTotal
    },
    emp: {
      start: state.empStart,
      current: state.empCurrent,
      threshold: state.empThreshold
    },
    slotsUsed: state.slotsUsed
  };
}
function computeCyberwareModifiers(installed, installCounts) {
  const mods = {
    stats: {},  // e.g. { BODY: +2 }
    skills: {}  // e.g. { "Wardrobe & Style": +2 }
  };

  const has = (name) => (installCounts[name] || 0) > 0;

  const countAtLeast = (name, n) => (installCounts[name] || 0) >= n;

  for (const item of installed) {
    if (!Array.isArray(item.effects)) continue;

    for (const eff of item.effects) {
      // Check conditions (if present)
      if (eff.ifInstalled && !eff.ifInstalled.every(has)) continue;

      if (eff.ifCountAtLeast) {
        const { name, count } = eff.ifCountAtLeast;
        if (!countAtLeast(name, count)) continue;
      }

      if (eff.kind === "stat") {
        const key = eff.stat;
        mods.stats[key] = (mods.stats[key] || 0) + (eff.amount || 0);
      } else if (eff.kind === "skill") {
        const key = eff.skill;
        mods.skills[key] = (mods.skills[key] || 0) + (eff.amount || 0);
      }
    }
  }

  return mods;
}
