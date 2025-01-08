function generateRockerboyPath() {
    // Step 1: Roll for Rockerboy Type
    const typeRoll = rockerboyLifepath.type[Math.floor(Math.random() * rockerboyLifepath.type.length)];
    
    // Step 2: Decide if Solo or Group
    const soloOrGroupRoll = rockerboyLifepath.soloOrGroup[Math.floor(Math.random() * rockerboyLifepath.soloOrGroup.length)];

    let additionalInfo = "";
    
    if (soloOrGroupRoll === "Solo") {
        // Step 3: If Solo, ask if once in a group
        const onceInGroupRoll = rockerboyLifepath.onceInGroup[Math.floor(Math.random() * rockerboyLifepath.onceInGroup.length)];

        if (onceInGroupRoll === "Group") {
            // Step 4: If once in a group, roll for reason left
            const leftGroupReasonRoll = rockerboyLifepath.leftGroupReason[Math.floor(Math.random() * rockerboyLifepath.leftGroupReason.length)];
            additionalInfo = `<p><strong>Was Once in a Group?:</strong> Yes</p>
                              <p><strong>Reason for Leaving Group?:</strong> ${leftGroupReasonRoll}</p>`;
        } else {
            additionalInfo = `<p><strong>Was Once in a Group:</strong> No</p>`;
        }
    }
    const performanceLocation = rockerboyLifepath.performanceLocation[Math.floor(Math.random() * rockerboyLifepath.performanceLocation.length)];
    const rockerboyEnemy = rockerboyLifepath.rockerboyEnemy[Math.floor(Math.random() * rockerboyLifepath.rockerboyEnemy.length)];
    // Return the full role path details
    return `
        <p><strong>Rockerboy Type:</strong> ${typeRoll}</p>
        <p><strong>Solo or Group:</strong> ${soloOrGroupRoll}</p>
        <p><strong>Where Do You Perform?</strong> ${performanceLocation}</p>
        <p><strong>Who's Gunning for You?</strong> ${rockerboyEnemy}</p>
        ${additionalInfo}
    `;
}
function generateSoloPath() {
    const typeRoll = soloLifepath.type[Math.floor(Math.random() * soloLifepath.type.length)];
    const moralCompass = soloLifepath.moralCompass[Math.floor(Math.random() * soloLifepath.moralCompass.length)];
    const operationalTerritory = soloLifepath.operationalTerritory[Math.floor(Math.random() * soloLifepath.operationalTerritory.length)];
    const soloEnemy = soloLifepath.soloEnemy[Math.floor(Math.random() * soloLifepath.soloEnemy.length)];

    return `
        <p><strong>Solo Type:</strong> ${typeRoll}</p>
        <p><strong>Moral Compass:</strong> ${moralCompass}</p>
        <p><strong>Where Do You Operate?</strong> ${operationalTerritory}</p>
        <p><strong>Who's Gunning for You?</strong> ${soloEnemy}</p>
    `;
}

function generateNetrunnerPath() {
    const typeRoll = netrunnerLifepath.type[Math.floor(Math.random() * netrunnerLifepath.type.length)];
    const aloneOrPartner = netrunnerLifepath.aloneOrPartner[Math.floor(Math.random() * netrunnerLifepath.aloneOrPartner.length)];
    let additionalInfo = "";
    if (aloneOrPartner === "Got a Partner") {
        // Step 3: If Solo, ask if once in a group
        const partner = netrunnerLifepath.partner[Math.floor(Math.random() * netrunnerLifepath.partner.length)];
        additionalInfo = `<p><strong>Who are They?:</strong> ${partner}</p>`;
        }
    const workspace = netrunnerLifepath.workspace[Math.floor(Math.random() * netrunnerLifepath.workspace.length)];
    const otherClients = netrunnerLifepath.otherClients[Math.floor(Math.random() * netrunnerLifepath.otherClients.length)];
    const programLocation = netrunnerLifepath.programLocation[Math.floor(Math.random() * netrunnerLifepath.programLocation.length)];
    const netrunnerEnemy = netrunnerLifepath.netrunnerEnemy[Math.floor(Math.random() * netrunnerLifepath.netrunnerEnemy.length)];
    // Return the full role path details
    return `
        <p><strong>Netrunner Type:</strong> ${typeRoll}</p>
        <p><strong>Work Alone or Got a Partner?:</strong> ${aloneOrPartner}</p>
        ${additionalInfo}
        <p><strong>What's Your Workspace Like?:</strong> ${workspace}</p>
        <p><strong>Other Clients?:</strong> ${otherClients}</p>
        <p><strong>Where Do You Get Your Programs?:</strong> ${programLocation}</p>
        <p><strong>Who's Gunning for You?:</strong> ${netrunnerEnemy}</p>
    `;
}

function generateTechPath() {
    const typeRoll = techLifepath.type[Math.floor(Math.random() * techLifepath.type.length)];
    const aloneOrPartner = techLifepath.aloneOrPartner[Math.floor(Math.random() * techLifepath.aloneOrPartner.length)];
    let additionalInfo = "";
    if (aloneOrPartner === "Got a Partner") {
        // Step 3: If Solo, ask if once in a group
        const partner = techLifepath.partner[Math.floor(Math.random() * techLifepath.partner.length)];
        additionalInfo = `<p><strong>Who are They?:</strong> ${partner}</p>`;
        }
    const workspace = techLifepath.workspace[Math.floor(Math.random() * techLifepath.workspace.length)];
    const mainClients = techLifepath.mainClients[Math.floor(Math.random() * techLifepath.mainClients.length)];
    const supplyLocation = techLifepath.supplyLocation[Math.floor(Math.random() * techLifepath.supplyLocation.length)];
    const techEnemy = techLifepath.techEnemy[Math.floor(Math.random() * techLifepath.techEnemy.length)];
    // Return the full role path details
    return `
        <p><strong>Tech Type:</strong> ${typeRoll}</p>
        <p><strong>Work Alone or Got a Partner?:</strong> ${aloneOrPartner}</p>
        ${additionalInfo}
        <p><strong>What's Your Workspace Like?:</strong> ${workspace}</p>
        <p><strong>Main Clients?:</strong> ${mainClients}</p>
        <p><strong>Where Do You Get Your Supplies?:</strong> ${supplyLocation}</p>
        <p><strong>Who's Gunning for You?:</strong> ${techEnemy}</p>
    `;
}

function generateMedtechPath() {
    const typeRoll = medtechLifepath.type[Math.floor(Math.random() * medtechLifepath.type.length)];
    const aloneOrPartner = medtechLifepath.aloneOrPartner[Math.floor(Math.random() * medtechLifepath.aloneOrPartner.length)];
    let additionalInfo = "";
    if (aloneOrPartner === "Got a Partner") {
        // Step 3: If Solo, ask if once in a group
        const partner = medtechLifepath.partner[Math.floor(Math.random() * medtechLifepath.partner.length)];
        additionalInfo = `<p><strong>Who are They?:</strong> ${partner}</p>`;
        }
    const workspace = medtechLifepath.workspace[Math.floor(Math.random() * medtechLifepath.workspace.length)];
    const mainClients = medtechLifepath.mainClients[Math.floor(Math.random() * medtechLifepath.mainClients.length)];
    const supplyLocation = medtechLifepath.supplyLocation[Math.floor(Math.random() * medtechLifepath.supplyLocation.length)];
    return `
        <p><strong>Medtech Type:</strong> ${typeRoll}</p>
        <p><strong>Work Alone or Got a Partner?:</strong> ${aloneOrPartner}</p>
        ${additionalInfo}
        <p><strong>What's Your Workspace Like?:</strong> ${workspace}</p>
        <p><strong>Main Clients?:</strong> ${mainClients}</p>
        <p><strong>Where Do You Get Your Supplies?:</strong> ${supplyLocation}</p>
    `;
}
function generateMediaPath() {
    const typeRoll = mediaLifepath.type[Math.floor(Math.random() * mediaLifepath.type.length)];
    const workReach = mediaLifepath.workReach[Math.floor(Math.random() * mediaLifepath.workReach.length)];
    const ethical = mediaLifepath.ethical[Math.floor(Math.random() * mediaLifepath.ethical.length)];
    const storyType = mediaLifepath.storyType[Math.floor(Math.random() * mediaLifepath.storyType.length)];

    return `
        <p><strong>Media Type:</strong> ${typeRoll}</p>
        <p><strong>How Does Your Work Reach the Public?:</strong> ${workReach}</p>
        <p><strong>How Ethical are You?:</strong> ${ethical}</p>
        <p><strong>Story Type:</strong> ${storyType}</p>
    `;
}
function generateExecutivePath() {
    const typeRoll = executiveLifepath.type[Math.floor(Math.random() * executiveLifepath.type.length)];
    const division = executiveLifepath.division[Math.floor(Math.random() * executiveLifepath.division.length)];
    const ethical = executiveLifepath.ethical[Math.floor(Math.random() * executiveLifepath.ethical.length)];
    const corpLocation = executiveLifepath.corpLocation[Math.floor(Math.random() * executiveLifepath.corpLocation.length)];
    const corpEnemy = executiveLifepath.corpEnemy[Math.floor(Math.random() * executiveLifepath.corpEnemy.length)];
    const bossState = executiveLifepath.bossState[Math.floor(Math.random() * executiveLifepath.bossState.length)];

    return `
        <p><strong>Executive Type:</strong> ${typeRoll}</p>
        <p><strong>Division:</strong> ${division}</p>
        <p><strong>How Good/Bad is Your Corp?:</strong> ${ethical}</p>
        <p><strong>Where is Your Corp Based?:</strong> ${corpLocation}</p>
        <p><strong>Who's Gunning for Your Group?:</strong> ${corpEnemy}</p>
        <p><strong>Current State with Your Boss:</strong> ${bossState}</p>
    `;
}
function generateLawmanPath() {
    const typeRoll = lawmanLifepath.type[Math.floor(Math.random() * lawmanLifepath.type.length)];
    const jurisdiction = lawmanLifepath.jurisdiction[Math.floor(Math.random() * lawmanLifepath.jurisdiction.length)];
    const ethical = lawmanLifepath.ethical[Math.floor(Math.random() * lawmanLifepath.ethical.length)];
    const lawmanEnemy = lawmanLifepath.lawmanEnemy[Math.floor(Math.random() * lawmanLifepath.lawmanEnemy.length)];
    const lawmanTarget = lawmanLifepath.lawmanTarget[Math.floor(Math.random() * lawmanLifepath.lawmanTarget.length)];
    return `
        <p><strong>Lawman Position:</strong> ${typeRoll}</p>
        <p><strong>Group Jurisdiction:</strong> ${jurisdiction}</p>
        <p><strong>How Corrupt is Your Group?:</strong> ${ethical}</p>
        <p><strong>Who's Gunning for Your Group?:</strong> ${lawmanEnemy}</p>
        <p><strong>Group's Major Target:</strong> ${lawmanTarget}</p>
    `;
}
function generateFixerPath() {
    const typeRoll = fixerLifepath.type[Math.floor(Math.random() * fixerLifepath.type.length)];
    const aloneOrPartner = fixerLifepath.aloneOrPartner[Math.floor(Math.random() * fixerLifepath.aloneOrPartner.length)];
    let additionalInfo = "";
    if (aloneOrPartner === "Got a Partner") {
        // Step 3: If Solo, ask if once in a group
        const partner = fixerLifepath.partner[Math.floor(Math.random() * fixerLifepath.partner.length)];
        additionalInfo = `<p><strong>Who are They?:</strong> ${partner}</p>`;
        }
    const workspace = fixerLifepath.workspace[Math.floor(Math.random() * fixerLifepath.workspace.length)];
    const sideClients = fixerLifepath.sideClients[Math.floor(Math.random() * fixerLifepath.sideClients.length)];
    const fixerEnemy = fixerLifepath.fixerEnemy[Math.floor(Math.random() * fixerLifepath.fixerEnemy.length)];
    return `
        <p><strong>Fixer Type:</strong> ${typeRoll}</p>
        <p><strong>Work Alone or Got a Partner?:</strong> ${aloneOrPartner}</p>
        ${additionalInfo}
        <p><strong>What's Your "Office" Like?:</strong> ${workspace}</p>
        <p><strong>Side Clients?:</strong> ${sideClients}</p>
        <p><strong>Who's Gunning for You?:</strong> ${fixerEnemy}</p>
    `;
}
function generateNomadPath() {
    const packSize = nomadLifepath.packSize[Math.floor(Math.random() * nomadLifepath.packSize.length)];
    const landAirOrSea = nomadLifepath.landAirOrSea[Math.floor(Math.random() * nomadLifepath.landAirOrSea.length)];
    let additionalInfo = "";
    if (landAirOrSea === "Land") {
        const landWorkType = nomadLifepath.landWorkType[Math.floor(Math.random() * nomadLifepath.landWorkType.length)];
        additionalInfo = `<p><strong>What Do They Do?:</strong> ${landWorkType}</p>`;
        }
    if (landAirOrSea === "Air") {
        const airWorkType = nomadLifepath.airWorkType[Math.floor(Math.random() * nomadLifepath.airWorkType.length)];
        additionalInfo = `<p><strong>What Do They Do?:</strong> ${airWorkType}</p>`;
        }
    if (landAirOrSea === "Sea") {
        const seaWorkType = nomadLifepath.seaWorkType[Math.floor(Math.random() * nomadLifepath.seaWorkType.length)];
        additionalInfo = `<p><strong>What Do They Do?:</strong> ${seaWorkType}</p>`;
        }
    const packWork = nomadLifepath.packWork[Math.floor(Math.random() * nomadLifepath.packWork.length)];
    const philosophy = nomadLifepath.philosophy[Math.floor(Math.random() * nomadLifepath.philosophy.length)];
    const nomadEnemy = nomadLifepath.nomadEnemy[Math.floor(Math.random() * nomadLifepath.nomadEnemy.length)];
    return `
        <p><strong>Nomad Pack Size:</strong> ${packSize}</p>
        <p><strong>Land, Air, or Sea?:</strong> ${landAirOrSea}</p>
        ${additionalInfo}
        <p><strong>What Do You Do for Your Pack?:</strong> ${packWork}</p>
        <p><strong>Pack Philosophy:</strong> ${philosophy}</p>
        <p><strong>Who's Gunning for Your Pack?:</strong> ${nomadEnemy}</p>
    `;
}