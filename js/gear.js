function generateWeapons() {
    const numWeapons = Math.floor(Math.random() * 4) + 1; // Roll 1d4 (1-4 weapons)
    const generatedWeapons = [];

    for (let i = 0; i < numWeapons; i++) {
        const weaponTypeRoll = Math.random(); // Roll for weapon type (Ranged, Melee, Exotic)

        if (weaponTypeRoll < 0.05) {
            // 5% chance for Exotic
            const exoticWeapon = weapons.Exotic[Math.floor(Math.random() * weapons.Exotic.length)];
            generatedWeapons.push(`Exotic: ${exoticWeapon}`);
        } else if (weaponTypeRoll < 0.6) {
            // 55% chance for Ranged
            const rangedCategory = Object.keys(weapons.Ranged)[Math.floor(Math.random() * Object.keys(weapons.Ranged).length)];
            const rangedWeapon = weapons.Ranged[rangedCategory][Math.floor(Math.random() * weapons.Ranged[rangedCategory].length)];
            generatedWeapons.push(`${rangedWeapon}`);
        } else {
            // 40% chance for Melee
            const meleeCategory = Object.keys(weapons.Melee)[Math.floor(Math.random() * Object.keys(weapons.Melee).length)];
            const meleeWeapon = weapons.Melee[meleeCategory][Math.floor(Math.random() * weapons.Melee[meleeCategory].length)];
            generatedWeapons.push(`${meleeCategory} Melee: ${meleeWeapon}`);
        }
    }

    return generatedWeapons;
}
