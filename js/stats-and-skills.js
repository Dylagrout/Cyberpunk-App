function generateStats(rolePreferences) {
    const totalPoints = 62;
    const minStat = 2;
    const maxStat = 8;
    const stats = { INT: 2, REF: 2, DEX: 2, COOL: 2, WILL: 2, MOVE: 2, TECH: 2, EMP: 2, LUCK: 2, BODY: 2 };
    const role = currentCharacter.role;
    const rolePref = rolePreferences[role];
    if (!rolePref) {
        console.warn(`Role '${role}' not found in rolePreferences. Using default STAT distribution.`);
        return stats; // Return unallocated stats as a fallback
    }

    const { primaryStats, secondaryStats } = rolePref;
    let remainingPoints = totalPoints - Object.keys(stats).length * minStat;

    // Allocate points to Primary STATs
    primaryStats.forEach(stat => {
        const allocation = Math.min(maxStat, 7 + Math.floor(Math.random() * 2)); // Random between 7-8
        const pointsToAllocate = allocation - stats[stat];
        stats[stat] += pointsToAllocate;
        remainingPoints -= pointsToAllocate;
    });

    // Allocate points to Secondary STATs
    secondaryStats.forEach(stat => {
        if (remainingPoints <= 0) return; // Stop if no points remain
        const maxAllocation = Math.min(maxStat, 5 + Math.floor(Math.random() * 4)); // Random between 5-8
        const allocation = Math.min(maxAllocation, stats[stat] + remainingPoints);
        const pointsToAllocate = allocation - stats[stat];
        stats[stat] += pointsToAllocate;
        remainingPoints -= pointsToAllocate;
    });

    // Distribute remaining points to other STATs randomly
    const remainingStats = Object.keys(stats).filter(stat => !primaryStats.includes(stat) && !secondaryStats.includes(stat));
    while (remainingPoints > 0) {
        const randomStat = remainingStats[Math.floor(Math.random() * remainingStats.length)];
        if (stats[randomStat] < maxStat) {
            stats[randomStat]++;
            remainingPoints--;
        }
    }
    return stats;
}
function generateSkills(rolePreferences, culturalLanguage, neighborhood, generatedStats) {
    const totalSkillPoints = 60;
    const skills = { ...defaultSkills };

    // Cultural Language + Local Expert
    skills[`Language (${culturalLanguage})`] = Math.max(4, skills[`Language (${culturalLanguage})`] || 0);
    skills[`Local Expert (${neighborhood})`] = Math.max(2, skills[`Local Expert (${neighborhood})`] || 0);
    delete skills["Language (Native)"];
    delete skills["Local Expert (Your Home)"];

    const role = currentCharacter.role;
    const rolePref = rolePreferences[role];
    if (!rolePref) {
        console.warn(`Role '${role}' not found in rolePreferences. Defaulting to basic skill allocation.`);
        return allocateDefaultSkills(skills, totalSkillPoints);
    }

    const { preferredSkills } = rolePref;

    // --- Build focus skill list (varied each time) ---
    const allSkills = Object.keys(skillsByStat).flatMap(stat => skillsByStat[stat]);

    // Find the character's top STATs (used for the "pull from high STAT" chance)
    const stats = generatedStats || currentCharacter.stats || {};
    const topStats = Object.keys(stats)
        .filter(s => skillsByStat[s] && skillsByStat[s].length > 0)
        .sort((a, b) => (stats[b] ?? 0) - (stats[a] ?? 0))
        .slice(0, 2); // top 2 stats
    const highStatSkillPool = topStats.flatMap(s => skillsByStat[s] || []);

    // How many focus skills do we want?
    const focusCount = 10 + Math.floor(Math.random() * 5); // 10–14

    // Per-pick variance knobs (tune these)
    const chanceAnySkill = 0.08; // ~8% of picks can be *anything*
    const chanceHighStat = 0.15; // ~15% of picks can be from high STAT pools

    const focusSkills = new Set();
    while (focusSkills.size < focusCount) {
        const roll = Math.random();

        let pool = preferredSkills;
        if (roll < chanceAnySkill) {
            pool = allSkills;
        } else if (roll < chanceAnySkill + chanceHighStat && highStatSkillPool.length > 0) {
            pool = highStatSkillPool;
        }

        const picked = pool[Math.floor(Math.random() * pool.length)];
        if (!picked) continue;
        if (focusSkills.has(picked)) continue;

        focusSkills.add(picked);
    }

    // --- Allocate points ---
    let remainingPoints = totalSkillPoints;

    // 1) Put most points into the focus skills (4–6 each, capped at 6)
    for (const skill of focusSkills) {
        if (remainingPoints <= 0) break;
        if (skills[skill] == null) skills[skill] = 0;

        const target = Math.min(6, 4 + Math.floor(Math.random() * 3)); // 4–6
        const pointsToAdd = Math.max(0, target - skills[skill]);
        const spend = Math.min(pointsToAdd, remainingPoints);

        skills[skill] += spend;
        remainingPoints -= spend;
    }

    // 2) Lightly reinforce baseline (default) skills without making everyone identical
    for (const skill of Object.keys(defaultSkills)) {
        if (remainingPoints <= 0) break;

        const maxAllocation = 4;
        const current = skills[skill] ?? 0;
        const target = Math.min(maxAllocation, current + Math.floor(Math.random() * (maxAllocation - current + 1)));
        const spend = Math.min(target - current, remainingPoints);

        skills[skill] = current + spend;
        remainingPoints -= spend;
    }

    // 3) Sprinkle remaining points across the wider skill list (up to 3)
    while (remainingPoints > 0) {
        const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
        if (!randomSkill) continue;

        if (skills[randomSkill] == null) skills[randomSkill] = 0;

        if (skills[randomSkill] < 3) {
            skills[randomSkill]++;
            remainingPoints--;
        }
    }

    return skills;
}
function allocateDefaultSkills(skills, totalSkillPoints) {
    const allSkills = Object.keys(skillsByStat).flatMap(stat => skillsByStat[stat]);
    let remainingPoints = totalSkillPoints;

    while (remainingPoints > 0) {
        const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
        if (!skills[randomSkill]) skills[randomSkill] = 0; 
        if (skills[randomSkill] < 3) { 
            skills[randomSkill]++;
            remainingPoints--;
        }
    }
    return skills;
}
function calculateDerivedStats(stats, humanityOverride = null) {
    const hp = 10 + 5 * (Math.ceil((stats.BODY + stats.WILL) / 2));
    const humanity = (humanityOverride !== null) ? humanityOverride : (stats.EMP * 10);
    const seriouslyWounded = Math.ceil(hp * 0.5);
    const deathSave = stats.BODY;
    return { hp, humanity, seriouslyWounded, deathSave };
}
