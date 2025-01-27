
// Add event listener for generate character button
document.getElementById('generate-character').addEventListener('click', () => {
    currentCharacter = {};
    const role = roles[Math.floor(Math.random() * roles.length)];
    currentCharacter.role = role;
    const age = Math.floor(Math.random() * 30) + 21;
    const randomSex = sex[Math.floor(Math.random() * sex.length)];
    const randomGender = gender[Math.floor(Math.random() * gender.length)];
    const randomSexuality = sexuality[Math.floor(Math.random() * sexuality.length)];
    const randomOrigin = culturalOrigins[Math.floor(Math.random() * culturalOrigins.length)];
    const randomLanguage = randomOrigin.languages[Math.floor(Math.random() * randomOrigin.languages.length)];
    const randomEnvironment = environment[Math.floor(Math.random() * environment.length)];
    const randomNeighborhood = randomEnvironment.neighborhoods[Math.floor(Math.random() * randomEnvironment.neighborhoods.length)];
    const randomPersonality = personalities[Math.floor(Math.random() * personalities.length)];
    const randomClothingStyle = clothingStyles[Math.floor(Math.random() * clothingStyles.length)];
    const randomHairstyle = hairstyles[Math.floor(Math.random() * hairstyles.length)];
    const randomAffectation = affectation[Math.floor(Math.random() * affectation.length)];
    const randomValuedIdea = valuedIdea[Math.floor(Math.random() * valuedIdea.length)];
    const randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
    const randomValuedPerson = valuedPerson[Math.floor(Math.random() * valuedPerson.length)];
    const randomPosession = possession[Math.floor(Math.random() * possession.length)];
    const randomGoal = lifeGoal[Math.floor(Math.random() * lifeGoal.length)];
    const randomFamilyBackground = familyBackground[Math.floor(Math.random() * familyBackground.length)];
    const { friends, enemies, lovers } = rollFriendsAndEnemiesAndLovers();
    if (!rolePreferences[role]) {
        console.error(`Role '${role}' is not defined in rolePreferences.`);
        return;
    }
    const stats = generateStats(rolePreferences); // Use role preferences
    const skills = generateSkills(rolePreferences, randomLanguage, randomNeighborhood);
    const derivedStats = calculateDerivedStats(stats);
    const weapons = generateWeapons();
    console.log(role)
    console.log(stats);
    console.log(skills);
    console.log(rolePreferences[role]);
    currentCharacter = {
        role,
        age,
        randomSex,
        randomGender,
        randomSexuality,
        culturalOrigin: {
            region: randomOrigin.region,
            language: randomLanguage,
        },
        childhood: {
            environment: randomEnvironment.description,
            neighborhood: randomNeighborhood,
        },
        randomPersonality,
        randomClothingStyle,
        randomHairstyle,
        randomAffectation,
        randomValuedIdea,
        randomFeeling,
        randomValuedPerson,
        randomPosession,
        randomGoal,
        familyBackground: {
            background: randomFamilyBackground.background,
            description: randomFamilyBackground.description
        },
        friends,
        enemies,
        lovers,
        stats,
        skills,
        derivedStats,
        weapons
    };

    // Display the generated character
    displayCharacter(currentCharacter);
});
function rollDice() {
    return Math.floor(Math.random() * 10) + 1; // Rolls a 1d10
}
function generateRoleSpecificInfo(role) {
    switch (role) {
        case "Rockerboy":
            return generateRockerboyPath(); // Call the rockerboy path function
        case "Solo":
            return generateSoloPath();
        case "Netrunner":
            return generateNetrunnerPath();
        case "Tech":
            return generateTechPath();
        case "Medtech":
            return generateMedtechPath();
        case "Executive":
            return generateExecutivePath();
        case "Media":
            return generateMediaPath();
        case "Lawman":
            return generateLawmanPath();
        case "Fixer":
            return generateFixerPath();
        case "Nomad":
            return generateNomadPath();
        default:
            return "<p>No role-specific info available.</p>";
    }
}
function displayCharacter(character) {
    const {
        role,
        age,
        randomSex,
        randomGender,
        randomSexuality,
        culturalOrigin,
        childhood,
        randomPersonality,
        randomClothingStyle,
        randomHairstyle,
        randomAffectation,
        randomValuedIdea,
        randomFeeling,
        randomValuedPerson,
        randomPosession,
        randomGoal,
        familyBackground,
        friends,
        enemies,
        lovers,
        stats,
        skills,
        derivedStats,
        weapons
    } = character;

    const displayDiv = document.getElementById('character-display');

    displayDiv.innerHTML = `
        <div class="character-container">
            <!-- Left Column -->
            <div class="left-column">
                <h2>Character Name</h2>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Sex:</strong> ${randomSex}</p>
                <p><strong>Gender:</strong> ${randomGender}</p>
                <p><strong>Sexuality:</strong> ${randomSexuality}</p>
                <h2>Character Info</h2>
                <div>
                    <h3>Cultural Origin</h3>
                    <p><strong>Region:</strong> ${culturalOrigin.region}</p>
                    <p><strong>Language:</strong> ${culturalOrigin.language}</p>
                </div>
                <div>
                    <p><strong>Personality:</strong> ${randomPersonality}</p>
                    <p><strong>Clothing Style:</strong> ${randomClothingStyle}</p>
                    <p><strong>Hairstyle:</strong> ${randomHairstyle}</p>
                    <p><strong>Affectation:</strong> ${randomAffectation}</p>
                </div>
            </div>
            <!-- Right Column -->
            <div class="right-column">
                <h3>Motivations and Relationships</h3>
                <p><strong>What Do You Value Most?:</strong> ${randomValuedIdea}</p>
                <p><strong>How Do You Feel About Most People?:</strong> ${randomFeeling}</p>
                <p><strong>Most Valued Person?:</strong> ${randomValuedPerson}</p>
                <p><strong>Most Valued Possession?:</strong> ${randomPosession}</p>
                <p><strong>Life Goal?:</strong> ${randomGoal}</p>
                <br>
                <h3>Family Background</h3>
                <p><strong>Background:</strong> ${familyBackground.background}</p>
                <p><strong>Description:</strong> ${familyBackground.description}</p>
                <p><strong>Childhood Environment:</strong> ${childhood.environment}</p>
                <br>
            </div>
            <div class="right-column">
                <h3>Friends</h3>
                <ul>
                    ${friends.map(friend => `<li>${friend.type}</li>`).join('')}
                </ul>
                <h3>Enemies</h3>
                <ul>
                    ${enemies.map(enemy => `
                        <li>
                            <strong>Type:</strong> ${enemy.type}<br>
                            <strong>Rift Cause:</strong> ${enemy.cause}<br>
                            <strong>What They Can Throw:</strong> ${enemy.throwAtYou}
                        </li>
                    `).join('')}
                </ul>
                <h3>Tragic Love Affairs</h3>
                <ul>
                    ${lovers.map(lover => `<li>${lover.type}</li>`).join('')}
                </ul>
            </div>
            <div class="role-specific-container">
            <h3>Role-Specific Information</h3>
            ${generateRoleSpecificInfo(role)}
            </div>
        </div>
        <div class="stats-section">
            <h3>STATs</h3>
            <div class="stat-boxes">
                ${Object.entries(stats).map(([stat, value]) => `
                    <div class="stat-box ${rolePreferences[role].primaryStats.includes(stat) ? 'primary' : ''} ${rolePreferences[role].secondaryStats.includes(stat) ? 'secondary' : ''}">
                        <strong>${stat}</strong>
                        <p>${value}</p>
                    </div>
                `).join('')}
            </div>

            <!-- Derived Stats Section -->
            <div class="derived-stats-box">
                <h4>Derived Stats</h4>
                <div class="derived-stats">
                    <div><strong>Humanity:</strong> ${derivedStats.humanity}</div>
                    <div><strong>Hit Points (HP):</strong> ${derivedStats.hp}</div>
                    <div><strong>Seriously Wounded Threshold:</strong> ${derivedStats.seriouslyWounded}</div>
                    <div><strong>Death Save Threshold:</strong> ${derivedStats.deathSave}</div>
                </div>
            </div>
        </div>

<div class="skills-section">
    <h3>Skills</h3>
    ${Object.entries(stats)
        .filter(([stat]) => skillsByStat.hasOwnProperty(stat)) // Only include stats that exist in skillsByStat
        .map(([stat, value]) => `
            <div class="skill-group">
                <h4>${stat}: ${value}</h4>
                <div class="skill-items">
                    ${Object.keys(skills)
                        .filter(skill =>
                            skillsByStat[stat].includes(skill) || // Ensure stat is valid before checking
                            (stat === "INT" && (skill.startsWith("Language") || skill.startsWith("Local Expert")))
                        )
                        .map(skill => `
                            <div class="skill-item ${rolePreferences[currentCharacter.role]?.preferredSkills?.includes(skill) ? 'preferred' : ''}">
                                <strong>${skill}:</strong> ${skills[skill]} 
                                <em>(Total: ${value + skills[skill]})</em>
                            </div>
                        `).join('')}
                </div>
            </div>
        `).join('')}
</div>
<!-- Weapons Section -->
    <div class="weapons-section">
        <h3>Weapons</h3>
        <ul>
            ${weapons.map(weapon => `<li>${weapon}</li>`).join('')}
        </ul>
    </div>
        <button id="save-character">Save Character</button>
    `;

    // Add event listener for save button
    document.getElementById('save-character').addEventListener('click', () => {
        saveCharacter(character);
    });
}
function rollFriendsAndEnemiesAndLovers() {
    const roll1d10Minus7 = () => Math.max(0, Math.floor(Math.random() * 10) + 1 - 7);

    // Roll for number of friends and enemies
    const numberOfFriends = roll1d10Minus7();
    const numberOfEnemies = roll1d10Minus7();
    const numberOfLovers = roll1d10Minus7();

    const friends = [];
    for (let i = 0; i < numberOfFriends; i++) {
        const type = friendType[Math.floor(Math.random() * friendType.length)];
        friends.push({ type });
    }

    const enemies = [];
    for (let i = 0; i < numberOfEnemies; i++) {
        const type = enemyType[Math.floor(Math.random() * enemyType.length)];
        const cause = riftCause[Math.floor(Math.random() * riftCause.length)];
        const throwAtYou = enemyThrow[Math.floor(Math.random() * enemyThrow.length)];
        enemies.push({ type, cause, throwAtYou });
    }
    const lovers = [];
    for (let i = 0; i < numberOfLovers; i++) {
        const type = loveAffair[Math.floor(Math.random() * loveAffair.length)];
        lovers.push({ type });
    }

    return { friends, enemies, lovers };
}

function saveCharacter(character) {
    const crew = JSON.parse(localStorage.getItem('crew')) || [];
    crew.push(character);
    localStorage.setItem('crew', JSON.stringify(crew));
    updateCrewList(); // Update the crew list after saving
}

function updateCrewList() {
    const crew = JSON.parse(localStorage.getItem('crew')) || [];
    const crewList = document.getElementById('crew-list');
    crewList.innerHTML = crew.map((c, index) => `
        <div>
            <h3>Character ${index + 1}</h3>
            <p><strong>Role:</strong> ${c.role}</p>
            <h4>Cultural Origin</h4>
            <p><strong>Region:</strong> ${c.culturalOrigin.region}</p>
            <p><strong>Language:</strong> ${c.culturalOrigin.language}</p>
        </div>
    `).join('');
}

let currentCharacter = {}; // Store the current character data globally.
