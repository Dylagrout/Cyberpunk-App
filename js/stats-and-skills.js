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
function generateSkills(rolePreferences, culturalLanguage, neighborhood) {
    const totalSkillPoints = 60;
    const skills = { ...defaultSkills };

    // Start with the Cultural Language skill
    // Replace placeholders with actual generated values
    skills[`Language (${culturalLanguage})`] = Math.max(4, skills[`Language (${culturalLanguage})`] || 0);
    skills[`Local Expert (${neighborhood})`] = Math.max(2, skills[`Local Expert (${neighborhood})`] || 0); // Set the neighborhood to 2 points
    delete skills["Language (Native)"];
    delete skills["Local Expert (Your Home)"];
    // Create a pool of all Skills to distribute points randomly
    const role = currentCharacter.role;
    const rolePref = rolePreferences[role];
    if (!rolePref) {
        console.warn(`Role '${role}' not found in rolePreferences. Defaulting to basic skill allocation.`);
        return allocateDefaultSkills(skills, totalSkillPoints); // Fallback allocation if role not found
    }

    const { preferredSkills } = rolePref;
    let remainingPoints = totalSkillPoints;

    // Allocate points to preferred skills
    preferredSkills.forEach(skill => {
        if (remainingPoints <= 0) return; 
        if (!skills[skill]) skills[skill] = 0; 
        const allocation = Math.min(6, skills[skill] + 4 + Math.floor(Math.random() * 3)); // Random between 4-6
        const pointsToAllocate = allocation - skills[skill];
        skills[skill] += pointsToAllocate;
        remainingPoints -= pointsToAllocate;
    });

    // Allocate points to Default Skills
    Object.keys(defaultSkills).forEach(skill => {
        if (remainingPoints <= 0) return; 
        const maxAllocation = 4; 
        const allocation = Math.min(maxAllocation, skills[skill] + Math.floor(Math.random() * (maxAllocation - skills[skill] + 1)));
        const pointsToAllocate = allocation - skills[skill];
        skills[skill] += pointsToAllocate;
        remainingPoints -= pointsToAllocate;
    });

    // Allocate points to other skills
    const allSkills = Object.keys(skillsByStat).flatMap(stat => skillsByStat[stat]);
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
function calculateDerivedStats(stats) {
    const hp = 10 + 5*(Math.ceil((stats.BODY + stats.WILL)/2)); // Example: Hit Points based on BODY
    const humanity = stats.EMP * 10; // Example: Humanity based on EMP
    const seriouslyWounded = Math.ceil(hp * 0.5); // Seriously Wounded Threshold is half of HP
    const deathSave = stats.BODY; // Example: Death Save equals BODY
    return { hp, humanity, seriouslyWounded, deathSave };
}