window.onload = function () {
    let selectedLocation = null;
    const character = JSON.parse(localStorage.getItem("currentCharacter"));
    const stats = JSON.parse(localStorage.getItem("characterStats"));
    const weapons = JSON.parse(localStorage.getItem("characterWeapons")) || [];
    const money = parseInt(localStorage.getItem("characterMoney")) || 0;

    if (!character || !stats) {
        alert("No character found. Redirecting...");
        window.location.href = "index.html";
        return;
    }

    const statDisplay = Object.entries(stats).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join(" | ");
    const weaponDisplay = weapons.map(w => `${w.name} (${w.damage})`).join(", ");

    document.getElementById("hud").innerHTML = `
        <div class="hud-left">
            <strong>Role:</strong> ${character.role}
            <button id="toggle-character">View Character</button>
        </div>
        <div class="hud-center">
            ${statDisplay}
        </div>
        <div class="hud-right">
            <strong>Money:</strong> ${money}eb<br>
            <strong>Weapons:</strong> ${weaponDisplay}
        </div>
    `;
    document.getElementById("toggle-character").addEventListener("click", () => {
        console.log("Hello");
        const panel = document.getElementById("character-panel");
        panel.classList.toggle("hidden");

        // Populate skills
        const characterSkills = JSON.parse(localStorage.getItem("characterSkills")) || {};
        const skillDetails = Object.entries(characterSkills)
            .map(([skill, value]) => `<p><strong>${skill}:</strong> ${value}</p>`)
            .join('');
        document.getElementById("skill-details").innerHTML = skillDetails;
    });
    const mapImage = document.getElementById("map-image");
    mapImage.onload = () => {
        centerMap(); // Call this after image loads
    };

    if (mapImage.complete) {
        centerMap(); // If already loaded (cache), center immediately
    }
};



function explore() {
    alert("You explore Night City. (This will later do something cool.)");
}

function wait() {
    alert("You wait and time passes. (This may restore health or trigger events.)");
}

function shop() {
    alert("You visit a local shop. (Later, you’ll be able to buy gear.)");
}

const mapContainer = document.getElementById("map-container");
const mapWrapper = document.getElementById("map-wrapper");

let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

// Handle mousedown (start dragging only on left click)
mapContainer.addEventListener("mousedown", (e) => {
    if (e.button === 0) { // Left click only
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});

mapContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    translateX += dx;
    translateY += dy;
    lastX = e.clientX;
    lastY = e.clientY;

    updateTransform();
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mouseleave", () => {
    isDragging = false;
});

// Scroll to zoom at mouse position
mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    const scaleFactor = 1.1;
    const mouseX = e.clientX - mapContainer.offsetLeft;
    const mouseY = e.clientY - mapContainer.offsetTop;

    const prevScale = scale;
    scale *= e.deltaY < 0 ? scaleFactor : 1 / scaleFactor;
    scale = Math.max(0.2, Math.min(5, scale)); // Clamp zoom

    // Adjust translate to zoom to cursor
    translateX = mouseX - ((mouseX - translateX) / prevScale) * scale;
    translateY = mouseY - ((mouseY - translateY) / prevScale) * scale;

    updateTransform();
});

// Apply zoom and pan
function updateTransform() {
    mapWrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}
function centerMap() {
    const mapContainer = document.getElementById("map-container");
    const mapImage = document.getElementById("map-image");

    const containerWidth = mapContainer.offsetWidth;
    const containerHeight = mapContainer.offsetHeight;
    const imageWidth = mapImage.naturalWidth;
    const imageHeight = mapImage.naturalHeight;

    // Start fully zoomed out (but not too tiny)
    scale = Math.min(
        containerWidth / imageWidth,
        containerHeight / imageHeight
    );

    // Center the image
    translateX = (containerWidth - imageWidth * scale) / 2;
    translateY = (containerHeight - imageHeight * scale) / 2;

    updateTransform();
}



document.querySelectorAll(".poi").forEach(poi => {
  poi.addEventListener("click", () => {
    const name = poi.getAttribute("data-name");
    selectedLocation = name;

    // Hide map & location panels
    document.getElementById("map-container").classList.add("hidden");
    document.getElementById("location-wrapper").classList.add("hidden");

    // Show Rent/Leave if location has lodging, etc.
    // (you already did this in visitLocation)
    visitLocation(name);

    // If there’s a gig here, show the “Start Gig” button
    const btn = document.getElementById("start-gig-btn");
    if (gigsByLocation[name]) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });
});



function visitLocation(name) {
    // Hide map
    document.getElementById("map-container").classList.add("hidden");
    document.getElementById("location-wrapper").classList.remove("hidden");

    // Show Rent/Leave buttons
    document.getElementById("rent-btn").classList.remove("hidden");
    document.getElementById("leave-btn").classList.remove("hidden");

    if (name === "Camden Court") {
        document.getElementById("location-image").src = "images/camden-court.jpg";
        document.getElementById("location-description").innerHTML = `
            <h2>Camden Court Apartments</h2>
            <p>Camden Court is a gritty  apartment block known for its cheap rent and thick concrete walls.
            Solos, mercs, and cyberpsychos trying to lay low call this place home.</p>
            <p>Your room smells like gun oil and wet chrome. Rent is <strong>3000eb/mo</strong></p>
        `;
    }
}
function rentRoom() {
    let money = parseInt(localStorage.getItem("characterMoney") || 0);
    if (money >= 100) {
        money -= 100;
        localStorage.setItem("characterMoney", money);
        document.querySelector(".hud-right").innerHTML = `<strong>Money:</strong> ${money}eb<br><strong>Weapons:</strong> ${JSON.parse(localStorage.getItem("characterWeapons") || "[]").map(w => `${w.name} (${w.damage})`).join(", ")}`;
        alert("You rented a room. You feel slightly safer.");
    } else {
        alert("Not enough money!");
    }
}
document.getElementById("start-gig-btn").addEventListener("click", () => {
  if (!selectedLocation || !gigsByLocation[selectedLocation]) {
    alert("No gig available here.");
    return;
  }
  startGig(selectedLocation);
});


function startGig(locationName) {
  const gig = gigsByLocation[locationName];
  document.getElementById("map-container").classList.add("hidden");
  document.getElementById("location-wrapper").classList.add("hidden");

  document.getElementById("gig-name").innerText = gig.name;
  document.getElementById("gig-desc").innerText = gig.description;
  document.getElementById("gig-reward").innerText = gig.reward;

  document.getElementById("gig-panel").classList.remove("hidden");
}
document.getElementById("gig-stealth").addEventListener("click", () => runGig("stealth"));
document.getElementById("gig-combat").addEventListener("click", () => runGig("combat"));
document.getElementById("gig-cancel").addEventListener("click", () => {
  document.getElementById("gig-panel").classList.add("hidden");
  document.getElementById("location-wrapper").classList.remove("hidden");
  document.getElementById("start-gig-btn").classList.add("hidden");
});

function runGig(mode) {
  const gig = gigsByLocation[selectedLocation];
  if (!gig) return alert("No gig here!");

  // load stats & skills
  const stats  = JSON.parse(localStorage.getItem("characterStats"))  || {};
  const skills = JSON.parse(localStorage.getItem("characterSkills")) || {};

  // 1) if they picked combat, hand off to your combat loop
  if (mode === "combat") {
    runCombatForGig(gig);
    return;
  }

  // 2) otherwise it’s a simple skill-check gig
  const checkMap = {
    stealth:    { skill: "Stealth",    stat: "DEX"  },
    persuasion: { skill: "Persuasion", stat: "COOL" }
  };

  const entry = checkMap[mode];
  if (!entry) {
    return alert(`Unknown gig mode: ${mode}`);
  }

  const { skill, stat } = entry;
  const roll       = Math.floor(Math.random() * 10) + 1;
  const total      = roll + (skills[skill] || 0) + (stats[stat] || 0);
  const dv         = gig.dv[mode];

  console.log(`Roll ${roll} + skill(${skills[skill]||0}) + stat(${stats[stat]||0}) = ${total} vs DV ${dv}`);

  if (total > dv) {
    alert(`Success! You got ${gig.reward}eb`);
    let money = parseInt(localStorage.getItem("characterMoney")) || 0;
    localStorage.setItem("characterMoney", money + gig.reward);
  } else {
    alert("Mission failed.");
  }

  closeGigPanel();
}


function leaveLocation() {
  document.getElementById("location-wrapper").classList.add("hidden");
  document.getElementById("map-container").classList.remove("hidden");
  document.getElementById("start-gig-btn").classList.add("hidden");
}



