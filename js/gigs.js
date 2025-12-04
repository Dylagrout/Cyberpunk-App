
// ranked difficulties → numeric target
const DVs = {
  Simple:   9,
  Everyday: 13,
  Difficult: 15,
  Professional: 17,
  Heroic: 21,
  Incredible: 25,
  Legendary:29
};
const weaponsList = [
  {
    name: "Medium Pistol",
    category: "Handgun",
    damage: "2d6",           // dice notation
    rateOfFire: 2,           // shots per turn
    rangeBands: [            // maximum range (m) → DV to hit
      { max: 6,  dv: 13 },
      { max: 12,  dv: 15 },
      { max: 25,  dv: 20 },
      { max: 50, dv: 25 },
      { max: 100, dv: 30 },
      { max: 200, dv: 30 },
      { max: 400, dv: 99 },
      { max: 800, dv: 99 },
    ]
  },
  {
    name: "Medium Pistol",
    category: "Handgun",
    damage: "2d6",           // dice notation
    rateOfFire: 2,           // shots per turn
    rangeBands: [            // maximum range (m) → DV to hit
      { max: 6,  dv: 13 },
      { max: 12,  dv: 15 },
      { max: 25,  dv: 20 },
      { max: 50, dv: 25 },
      { max: 100, dv: 30 },
      { max: 200, dv: 30 },
      { max: 400, dv: 99 },
      { max: 800, dv: 99 },
    ]
  },
];

const armorsList = [
  { name: "Kevlar", rating: 7 },
  { name: "Light Armorjack",   rating: 11 },
  { name: "Heavy Armorjack",  rating: 13 },
];

const gigsByLocation = {
  "Camden Court": {
    name: "Heist at Camden Tech Labs",
    description: "Infiltrate Camden Court’s basement tech lab and swipe the prototype cyberdeck.",
    reward: 1000,
    // You’ll let the user choose stealth or combat,
    // so give both DVs:
    dv: {
      stealth: DVs.Professional,  // You need Stealth vs. 17
      persuasion: DVs.Heroic,     // You need Persuasion vs. 9
    }
  },
  // …more gigs for other POIs…
};
async function runCombat(player, enemy) {
  // initialize
  player.health = player.maxHealth;
  enemy.health  = enemy.maxHealth;

  while (true) {
    // ── PLAYER TURN ──
    const weapon = player.weapon;
    const dv     = getWeaponDV(weapon);
    const skillValue = skills[weapon.category] || 0; // e.g. Handgun
    const attackRoll = Math.floor(Math.random()*10)+1 + skillValue;

    // enemy Evasion check?
    const evadeRoll = Math.floor(Math.random()*10)+1 + (skills["Evasion"]||0) + (stats.DEX||0);
    if (evadeRoll > attackRoll) {
      console.log("Enemy evaded your attack!");
    } else if (attackRoll > dv) {
      // hit and roll damage
      const dmg = rollDice(weapon.damage);
      applyDamage(enemy, dmg);
      console.log(`You hit for ${dmg} → enemy armor now ${enemy.armor.rating}, hp ${enemy.health}`);
    } else {
      console.log("You missed!");
    }

    // check win
    if (enemy.health <= enemy.maxHealth/2) return true;

    // ── ENEMY TURN ── (mirror logic)
    // enemy picks its weapon/skill similarly …
    const eWeapon = enemy.weapon;
    const eDV     = getWeaponDV(eWeapon);
    const eAttRoll = Math.floor(Math.random()*10)+1 + (enemy.skills[eWeapon.category]||0);
    
    // can player evade?
    const pEvadeRoll = Math.floor(Math.random()*10)+1 + (skills["Evasion"]||0) + (stats.DEX||0);
    if (pEvadeRoll > eAttRoll) {
      console.log("You evaded!");
    } else if (eAttRoll > eDV) {
      const dmg = rollDice(eWeapon.damage);
      applyDamage(player, dmg);
      console.log(`Enemy hit you for ${dmg} → your hp ${player.health}`);
    } else {
      console.log("Enemy missed!");
    }

    if (player.health <= player.maxHealth/2) return false;
  }
}

const player = {
  stats: JSON.parse(localStorage.getItem("characterStats")),
  skills: JSON.parse(localStorage.getItem("characterSkills")),
  weapon: JSON.parse(localStorage.getItem("characterWeapons"))[0],  // your pistol
  armor:   { rating: 7 },
  maxHealth: 20
};
const enemy = {
  skills: { Handgun: 3, Evasion: 2 },
  weapon: weaponsList[0],         // pick some weapon
  armor:  { rating: 7 },
  maxHealth: 20
};
runCombat(player, enemy).then(success => {
  if (success) alert("You win! +100eb");
  else        alert("You lose!");
});
function getPlayerStealth() {
  const stats = JSON.parse(localStorage.getItem("characterStats"));
  const skills = JSON.parse(localStorage.getItem("characterSkills"));
  return (stats.DEX || 0) + (skills["Stealth"] || 0);
}

function getPlayerCombat() {
  const stats = JSON.parse(localStorage.getItem("characterStats"));
  const skills = JSON.parse(localStorage.getItem("characterSkills"));
  // e.g. combine REF + BODY + best weapon damage modifier
  const weaponMods = JSON.parse(localStorage.getItem("characterWeapons"))
    .map(w => parseInt(w.damage)) // assume damage "2d6" is converted to average 7
    .reduce((max, cur) => Math.max(max, cur), 0);
  return (stats.REF || 0) + (stats.BODY || 0) + (skills["Handgun"] || 0) + weaponMods;
}

// roll a dice string like "2d6" → integer total
function rollDice(notation) {
  const [count, sides] = notation.split("d").map(Number);
  let sum = 0;
  for (let i=0; i<count; i++) sum += Math.floor(Math.random()*sides) + 1;
  return sum;
}

// get DV for a weapon at a random range
function getWeaponDV(weapon) {
  // choose a random band
  const band = weapon.rangeBands[
    Math.floor(Math.random()*weapon.rangeBands.length)
  ];
  return band.dv;
}

// apply damage, considering armor
function applyDamage(target, rawDamage) {
  const armor = target.armor.rating;
  const absorbed = Math.min(rawDamage, armor);
  target.armor.rating -= 1;           // armor degrades
  const actual = rawDamage - absorbed;
  target.health -= actual;
  return actual;
}