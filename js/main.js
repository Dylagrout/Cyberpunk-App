
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
    const randomFamilyBackground = familyBackground[Math.floor(Math.random() * familyBackground.length)];


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
        familyBackground: {
            background: randomFamilyBackground.background,
            description: randomFamilyBackground.description
        },
    };

    // Display the generated character
    displayCharacter(currentCharacter);
});

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
        familyBackground
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
                <br>
                <h3>Family Background</h3>
                <p><strong>Background:</strong> ${familyBackground.background}</p>
                <p><strong>Description:</strong> ${familyBackground.description}</p>
            </div>
        </div>
        <button id="save-character">Save Character</button>
    `;

    // Add event listener for save button
    document.getElementById('save-character').addEventListener('click', () => {
        saveCharacter(character);
    });
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
