
// Add event listener for generate character button
document.getElementById('generate-character').addEventListener('click', () => {
    const role = roles[Math.floor(Math.random() * roles.length)];
    const randomOrigin = culturalOrigins[Math.floor(Math.random() * culturalOrigins.length)];
    const randomLanguage = randomOrigin.languages[Math.floor(Math.random() * randomOrigin.languages.length)];
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


    currentCharacter = {
        role,
        culturalOrigin: {
            region: randomOrigin.region,
            language: randomLanguage,
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
        lovers
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
        culturalOrigin,
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
        lovers
    } = character;

    const displayDiv = document.getElementById('character-display');

    displayDiv.innerHTML = `
        <div class="character-container">
            <!-- Left Column -->
            <div class="left-column">
                <h2>Character Name</h2>
                <p><strong>Role:</strong> ${role}</p>
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
