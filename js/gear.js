function generateWeapons() {
    const numWeapons = Math.floor(Math.random() * 4) + 1; // 1d4 weapons
    const generatedWeapons = []; // Renamed to avoid conflict with global `weapons`

    for (let i = 0; i < numWeapons; i++) {
        // Step 1: Randomly pick a weapon category
        const category = ["Melee", "Ranged", "Exotic"][Math.floor(Math.random() * 3)];
        let weaponType, weaponName;

        if (category === "Melee") {
            const meleeType = ["Light", "Medium", "Heavy", "VeryHeavy"][Math.floor(Math.random() * 4)];
            weaponType = meleeType;

            // Validate meleeType and pick a weapon
            const availableMeleeWeapons = weapons.Melee[meleeType];
            if (availableMeleeWeapons) {
                weaponName = availableMeleeWeapons[Math.floor(Math.random() * availableMeleeWeapons.length)];
            } else {
                console.warn(`No weapons found for melee type: ${meleeType}`);
                weaponName = "Unknown Melee Weapon"; // Fallback
            }
        } else if (category === "Ranged") {
            const rangedType = Object.keys(weapons.Ranged)[Math.floor(Math.random() * Object.keys(weapons.Ranged).length)];
            weaponType = rangedType;

            // Validate rangedType and pick a weapon
            const availableRangedWeapons = weapons.Ranged[rangedType];
            if (availableRangedWeapons) {
                weaponName = availableRangedWeapons[Math.floor(Math.random() * availableRangedWeapons.length)];
            } else {
                console.warn(`No weapons found for ranged type: ${rangedType}`);
                weaponName = "Unknown Ranged Weapon"; // Fallback
            }
        } else {
            weaponType = "Exotic";

            // Pick a random Exotic weapon
            weaponName = weapons.Exotic[Math.floor(Math.random() * weapons.Exotic.length)] || "Unknown Exotic Weapon";
        }

        // Step 2: Pick a quality for the weapon
        const quality = Object.keys(weaponQualities)[Math.floor(Math.random() * Object.keys(weaponQualities).length)];

        // Step 3: Filter manufacturers based on weapon type and quality
        const validManufacturers = Object.entries(manufacturers).filter(
            ([_, details]) => details.quality.includes(quality) && details.types.includes(weaponType)
        );

        // Pick a random manufacturer from the valid pool
        const manufacturer = validManufacturers.length > 0
            ? validManufacturers[Math.floor(Math.random() * validManufacturers.length)][0]
            : "Unknown Manufacturer"; // Fallback if no valid manufacturer is found

        // Step 4: Determine price based on quality
        const priceTier = weaponQualities[quality][Math.floor(Math.random() * weaponQualities[quality].length)];
        const price = priceValues[priceTier];

        // Add the generated weapon to the list
        generatedWeapons.push({
            name: weaponName,
            type: weaponType,
            quality,
            brand: manufacturer,
            priceTier,
            price
        });
    }

    return generatedWeapons;
}


