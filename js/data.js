const roles = ['Solo', 'Netrunner', 'Medtech', 'Rockerboy', 'Lawman', 'Executive', 'Tech', 'Media', 'Fixer', 'Nomad'];
const sex = ['Male', 'Female'];
const gender = ['Cis', 'Transgender', 'Non-Binary'];
const sexuality = ['Heterosexual', 'Homosexual', 'Bisexual', 'Pansexual', 'Asexual']
const culturalOrigins = [
    { region: "North America", languages: ["English", "Chinese", "Cree", "Creole", "French", "Navajo", "Spanish"] },
    { region: "South/Central America", languages: ["English", "Creole", "German", "Guarani", "Mayan", "Portuguese", "Quechua", "Spanish"] },
    { region: "Western Europe", languages: ["English", "Dutch", "German", "French", "Spanish", "Italian", "Norwegian", "Portuguese"] },
    { region: "Eastern Europe", languages: ["English", "Finnish", "Russian", "Polish", "Romanian", "Ukrainian"] },
    { region: "Middle Eastern/North African", languages: ["English", "Arabic", "Turkish", "Farsi", "Hebrew", "French", "Berber"] },
    { region: "Sub-Saharan African", languages: ["English", "Swahili", "French", "Arabic", "Hausa", "Lingala", "Oromo", "Portuguese", "Twi", "Yoruba"] },
    { region: "South Asian", languages: ["English", "Bengali", "Dari", "Hindi", "Nepali", "Urdu", "Tamil", "Sinhalese"] },
    { region: "South East Asian", languages: ["English", "Arabic", "Burmese", "Filipino", "Hindi", "Indonesian", "Khmer", "Malayan", "Vietnamese"] },
    { region: "East Asian", languages: ["English", "Cantonese Chinese", "Japanese", "Korean", "Mandarin Chinese", "Mongolian"] },
    { region: "Oceania/Pacific Islander", languages: ["English", "French", "Hawaiian", "Pama-Nyungan", "Tahitian", "Maori"] },
];
const personalities = ['Shy and secretive', 'Rebellious, antisocial, and violent', 'Arrogant, proud, and aloof', 'Moody, rash, and headstrong', 'Picky, fussy, and nervous', 'Stable and serious', 'Silly and fluff-headed', 'Sneaky and deceptive', 'Intellectual and detached', 'Friendly and outgoing'];
const hairstyles = ['Mohawk', 'Long and ratty', 'Short and spiked', 'Wild and all over', 'Bald', 'Striped', 'Wild colors', 'Neat and short', 'Short and curly', 'Long and straight'];
const clothingStyles = ['Generic Chic (Standard, Colorful, Modular)', 'Leisurewear (Comfort, Agility, Athleticism)', 'Urban Flash (Flashy, Technological, Streetwear)', 'Businesswear (Leadership, Presence, Authority)', 'High Fashion (Exclusive, Designer, Couture)', 'Bohemian (Folksy, Retro, Free-spirited)', 'Bag Lady Chic (Homeless, Ragged, Vagrant)', 'Gang Colors (Dangerous, Violent, Rebellious)', 'Nomad Leathers (Western, Rugged, Tribal)', 'Asia Pop (Bright, Costume-like, Youthful)'];
const affectation = ['Tattoos', 'Mirrorshades', 'Ritual scars', 'Spiked gloves', 'Nose rings', 'Tongue or other piercings', 'Strange fingernail implants', 'Spiked boots or heels', 'Fingerless gloves', 'Strange contacts'];
const valuedIdea = ['Money', 'Honor', 'Your word', 'Honesty', 'Knowledge', 'Vengeance', 'Love', 'Power', 'Family', 'Friendship'];
const feeling = ['I stay neutral.', 'I stay neutral.', 'I like almost everyone.', 'I hate almost everyone.', 'People are tools. Use them for your own goals then discard them.', 'Every person is a valuable individual.', 'People are obstacles to be destroyed if they cross me.', 'People are untrustworthy. Dont depend on anyone', 'Wipe em all out and let the cockroaches take over.', 'People are wonderful!'];
const valuedPerson = ['A parent', 'A brother or sister', 'A lover', 'A friend', 'Yourself', 'A pet', 'A teacher or mentor', 'A public figure', 'A personal hero', 'No one'];
const possession = ['A weapon', 'A tool', 'A piece of clothing', 'A photgraph', 'A book or diary', 'A recording', 'A musical instrument', 'A piece of jewelry', 'A toy', 'A letter'];
const familyBackground = [
    { background: "Corporate Execs", description: "Wealthy, powerful, with servants, luxury homes, and the best of everything. Private security made sure you were always safe. You definitely went to a big-name private school." },
    { background: "Corporate Managers", description: "Well to do, with large homes, safe neighborhoods, nice cars, etc. Sometimes your parent(s) would hire servants, although this was rare. You had a mix of private and corporate education." },
    { background: "Corporate Technicians", description: "Middle-middle class, with comfortable conapts or Beavervill suburban homes, minivans and corporate-run technical schools. Kind of like living 1950s America crossed with 1984" },
    { background: "Nomad Pack", description: "You had a mix of rugged trailers, vehicles, and huge road kombis for your home. You learned to drive and fight at an early age, but the family was always there to care for you. Food was actually fresh and abundant. Mostly home schooled" },
    { background: "Ganger 'Family'", description: "A savage, violent home in any place the gang could take over. You were usually hungry, cold, and scared. You probably didn't know who your actual parents were. Education? The Gang taught you how to fight, kill, and steal--what else did you need to know?" },
    { background: "Combat Zoners", description: "A step up from a gang 'family,' your home was a decaying building somewhere in the 'Zone,' heavily fortified. You were hungry at times, but regularly could score a bed and a meal. Home schooled." },
    { background: "Urban Homeless", description: "You lived in cars, dumpsters, or abandoned shipping modules. If you were lucky. You were usually hungry, cold, and scared, unless you were tough enough to fight for the scraps. Education? School of Hard Knocks." },
    { background: "Megastructure Warren Rats", description: "You grew up in one of the huge new megastructures that went up after the War. A tiny conapt, kibble and scrap for food, a mostly warm bed. Some better educated adult warren dwellers or a local Corporation may have set up a school." },
    { background: "Reclaimers", description: "You started out on the road, but then moved into one of the deserted ghost towns or cities to rebuild it. A pioneer life: dangerous, but with plenty of simple food and a safe place to sleep. You were home schooled if there was anyone who had the time." },
    { background: "Edgerunners", description: "Your home was always changing based on your parents' current 'job'. Could be a luxury apartment, an urban conapt, or a dumpster if you were on the run. Food and shelter ran the gamut from gourmet to kibble." },
];
const environment = [
    { description: 'Ran on The Street, with no adult supervision.', neighborhoods:["Little Europe", "Upper Marina", "Watson", "Watson (Kabuki)", "Heywood", "Santo Domingo", "Rancho Coronado", "New Westbrook", "Pacifica"]},
    { description: 'Spent in a safe Corp Zone walled off from the rest of the City', neighborhoods:["Executive Zone", "NorCal Military Base"]},
    { description: 'In a Nomad Pack moving from place to place.', neighborhoods:["Badlands", "Reclaimed Perimeter", "Santo Domingo", "Rancho Coronado"]},
    { description: 'In a Nomad pack with roots in transport (ships, planes, caravans).', neighborhoods:["Badlands", "Reclaimed Perimeter", "Santo Domingo", "Rancho Coronado"]},
    { description: 'In a decaying, once upscale neighborhood, now holding off the boosters to survive.', neighborhoods:["Little China", "Old Japantown", "Rancho Coronado", "Santo Domingo", "Hot Zone", "Heywood", "New Westbrook"]},
    { description: 'In the heart of the Combat Zone, living in a wrecked building or other squat.', neighborhoods:["Old Combat Zone", "Old Japantown", "South Night City", "Little China", "Hot Zone"]},
    { description: 'In a huge "megastructure" building controlled by a Corp or the City.', neighborhoods:["Heywood", "Santo Domingo", "Watson", "Watson (Kabuki)", "Rancho Coronado", "Heywood", "New Westbrook" ]},
    { description: 'In the ruins of a deserted town or city taken over by Reclaimers.', neighborhoods:["Reclaimed Perimeter", "Badlands"]},
    { description: 'In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people.', neighborhoods:["Drift Nations"]},
    { description: 'In a Corporate luxury "starscraper," high above the rest of the teeming rabble.', neighborhoods:["Executive Zone", "Upper Marina", "Little Europe", "The Glen", "Pacifica"]}
];
const familyCrisis = ['Your family lost everything through betrayal.', 'Your family lost everything through bad management.', 'Your family was exiled or otherwise driven from their original home/nation/Corporation.', 'Your family is imprisoned, and you alone escaped.', 'Your family vanished. You are the only remaining member.', 'Your family was killed, and you were the only survivor.', 'Your family is involved in a long-term conspiracy, organization, or association, such as a crime family or revolutionary group.', 'Your family was scattered to the winds due to misfortune.', 'Your family is cursed with a hereditary feud that has lasted for generations.', 'You are the inheritor of a family debt; you must honor this debt before moving on with your life.'];
const friendType = ['Like an older sibling to you.', 'Like a younger sibling to you.', 'A teacher or mentor.', 'A partner or coworker.', 'A former lover.', 'An old enemy', 'Like a parent to you.', 'An old childhood friend.', 'Someone you know from the Street', 'Someone with a common interest or goal.'];
const enemyType = ['Ex-friend', 'Ex-lover', 'Estranged relative', 'Childhood enemy', 'Person working for you', 'Person you work for', 'Partner or coworker', 'Corporate Exec', 'Government official', 'Boosterganger'];
const riftCause = ['Caused the other to lose face or status.', 'Caused the loss of a lover, friend, or relative.', 'Caused a major public humiliation.', 'Accused the other of cowardice or some other major personal flaw.', 'Deserted or betrayed the other', 'Turned down the others offer for a job or romantic involvement', 'You just dont like each other.', 'One of you was a romantic rival.', 'One of you was a business rival.', 'One of you set the other up for a crime they didnt commit.'];
const enemyThrow = ['Just themselves and event they wont go out of their way.', 'Just themselves', 'Just themselves and a close friend.', 'Themselves and a few (1d6/2) friends.', 'Themselves and a few (1d10/2) friends.', 'An entire gang (at least 1d10 + 5 people).', 'The local cops or other Lawmen.', 'A powerful gang lord or small Corporation.', 'A powerful Corporation.', 'An entire city or government or agency.'];
const revenge = ['Avoid the scum', 'Go into a murderous rage and try to physically rip their face off.', 'Backstab them indirectly.', 'Verbally attack them.', 'Set them up for a crime or other transgression they didnt commit.', 'Set out to murder or maim them.'];
const loveAffair = ['Your lover died in an accident.', 'Your lover mysteriously vanished.', 'It just didnt work out.', 'A personal goal or vendetta came between you and your lover.', 'Your lover was kidnapped.', 'Your lover went insane or cyberpsycho.', 'Your lover comitted suicide.', 'Your lover was killed in a fight.', 'A rival cut you out of the action.', 'Your lover is imprisoned or exiled.'];
const lifeGoal = ['Get rid of a bad reputation.', 'Gain power and control.', 'Get off The Street no matter what it takes.', 'Cause pain and suffering to anyone who crosses you.', 'Live down your past life and try to forget it.', 'Hunt down those responsible for your miserable life and make them pay.', 'Get whats rightfully yours.', 'Save, if possible, anyone else involved in your background, like a lover, or a family member.', 'Gain fame and recognition.', 'Become feared and respected.'];

const rockerboyLifepath = {
    type: ["Musician", "Slam Poet", 'Street Artist', 'Performance Artist', 'Comedian', 'Orator', 'Politico', 'Rap Artist', 'DJ', 'Idoru'],
    soloOrGroup: ["Solo", "Group"],
    onceInGroup: ["Solo", "Group"],
    leftGroupReason: ["You were a jerk and the rest of the group voted you out.", 'You got caught sleeping around with another members mainline.', 'The rest of the group was killed in a tragic "accident".', 'The rest of the group was murdered or otherwise broken up by external enemies.', 'The group broke up over "creative differences".', 'You decided to go solo.' ],
    performanceLocation: ["Alternative Cafes", "Private Clubs", "Seedy Dive Bars", "Guerilla Performances", "Nightclubs Around the City", "On the Data Pool"],
    rockerboyEnemy: ["Old group member who thinks you did them dirty.", "Rival group or artist trying to steal market share.", "Corporate enemies who don't like your message.", "Critic or other 'influencer' trying to bring you down.", "Older media star who feels threatened by your rising fame.", "Romantic interest or media figure who wants revenge for personal reasons."],
}
const soloLifepath = {
    type: ["Bodyguard", "Street Muscle for Hire", "Coporate Enforcer who takes jobs on the side", "Corporate or Freelance Black Ops Agent", "Local Vigilante for Hire", "Assassin/Hitman for Hire"],
    moralCompass: ["Always working for good, trying to take out the 'bad guys.'", "Always spare the innocent (elderly, women, children, pets).", "Will occasionally slip and do unethical or bad things, but it's rare.", "Ruthless and profit centered; you will work for anyone, take any job for the money.", "Willing to bend the rules (and the law) to get the job done.", "Totally evil. You engage in illegal, unethical work all the time; in fact, you enjoy it."],
    operationalTerritory: ["A Corporate Zone", "Combat Zones", "The whole City", "The territory of a single Corporation", "The territory of a particular Fixer or contact", "Wherever the money takes you"],
    soloEnemy: ["A Corporation you may have angered.", "A boostergang you may have tackled earlier.", "Corrupt Lawmen or Lawmen who mistakenly think you're guilty of something", "A rival Solo from another Corp.", "A Fixer who sees you as a threat.", "A rival Solo who sees you as their nemesis." ],
}
const netrunnerLifepath = {
    type: ["Freelancer who will hack for hire.", "Corporate 'clone runner' who hacks for the Man.", "Hacktivist interested in cracking systems and exposing bad guys.", "Just like to crack systems for the fun of it.", "Part of a regular team of freelancers", "Hack for a Media, politico, or Lawman who hires you as needed."],
    aloneOrPartner: ["Work Alone", "Got a Partner"],
    partner: ["Family member", "Old friend", "Possible romantic partner as well", "Secret partner who might be a rogue AI. Might.", "Secret partner with mob/gang connections", "Secret partner with Corporate connections."],
    workspace: ["There are screens everywhere.", "It looks better in Virtuality, you swear.", "It's a filthy bed covered in wires.", "Corporate, modular, and utilitarian.", "Minimalist, clean, and organized.", "It's taken over your entire living space." ],
    otherClients: ["Local Fixers who send you clients.", "Local gangers who also protect your work area while you sweep for NET threats.", "Corporate Execs who use you for 'black project' work.", "Local Solos or other combat types who use you to keep their personal systems secure.", "Local Nomads and Fixers who use you to keep their family systems secure.", "You work for yourself and sell whatever data you can find on the NET."],
    programLocation: ["Dig around in old abandoned City Zones.", "Steal them from other Netrunners you brain-burn.", "Have a local Fixer supply programs in exchange for hack work.", "Corporate Execs supply you with programs in exchange for your services.", "You have backdoors into a few Corporate warehouses.", "You hit the Night Markets and score programs whenever you can."],
    netrunnerEnemy: ["You think it might be a rogue AI or NET Ghost. Either way, it's bad news.", "Rival Netrunners who just don't like you.", "Corporates who want you to work for them exclusively", "Lawmen who consider you and illegal 'black hat' and want to bust you.", "Old clients who think you screwed them over.", "Fixer or another client who wants your services exclusively."],
}
const techLifepath = {
    type: ["Cyberware Technician", "Vehicle Mechanic", "Jack of All Trades", "Small Electronics Technician", "Weaponsmith", "Crazy Inventor", "Robot and Drone Mechanic", "Heavy Machinery Mechanic", "Scavenger", "Nautical Mechanic"],
    aloneOrPartner: ["Work Alone", "Got a Partner"],
    partner: ["Family member", "Old friend", "Possible romantic partner as well", "Mentor", "Secret partner with mob/gang connections", "Secret partner with Corporate connections."],
    workspace: ["A mess strewn with blueprint paper.", "Everything is color coded, but it's still a nightmare.", "Totally digital and obsessively backed up every day.", "You design everything on your Agent.", "You keep everything just in case you need it later.", "Only you understand your filing system." ],
    mainClients: ["Local Fixers who send you clients.", "Local gangers who also protect your work area or home.", "Corporate Execs who use you for 'black project' work.", "Local Solos or other combat types who use for weapon upkeep.", "Local Nomads and Fixers who bring you 'found' tech to repair.", "You work for yourself and sell what you invent/repair."],
    supplyLocation: ["Scavenge the wreckage you find in abandoned City Zones.", "Strip gear from bodies after firefights.", "Have a local Fixer bring you supplies in exchange for repair work.", "Corporate Execs supply you with stuff in exchange for your services.", "You have backdoors into a few Corporate warehouses.", "You hit the Night Markets and score deals whenever you can."],
    techEnemy: ["Combat Zone gangers who want you to work for them exclusively.", "Rival Tech trying to steal your customers.", "Corporates who want you to work for them exclusively", "Larger manufacturer trying to bring you down because your mods are a threat.", "Old client who thinks you screwed them over.", "Rival Tech trying to beat you out for resources and parts."],
}
const medtechLifepath = {
    type: ["Surgeon", "General Practitioner", "Trauma Medic", "Psychiatrist", "Cyberpsycho Therapist", "Ripperdoc", "Cryosystems Operator", "Pharmacist", "Bodysculptor", "Forensic Pathologist"],
    aloneOrPartner: ["Work Alone", "Got a Partner"],
    partner: ["Trauma Team group", "Old friend", "Possible romantic partner as well", "Family member", "Secret partner with mob/gang connections", "Secret partner with Corporate connections."],
    workspace: ["Sterilized daily in the morning like clockwork.", "It's not state-of-the-art anymore, but it's comfortable to you.", "Your cryo equipment is also used to cool drinks.", "Everything possible is single-use and stored compacted until needed.", "Not as clean as many of your patients may have hoped.", "Meticulously organized, sharpened, and sterilized." ],
    mainClients: ["Local Fixers who send you clients.", "Local gangers who also protect your work area or home in exchange for medical help.", "Corporate Execs who use you for 'black project' medical work.", "Local Solos or other combat types who use for medical help.", "Local Nomads and Fixers who bring you wounded clients.", "Trauma Team paramedical work."],
    supplyLocation: ["Scavenge stashes of medical supplies you find in abandoned City Zones.", "Strip parts from bodies after firefights.", "Have a local Fixer bring you supplies in exchange for medical work.", "Corporate Execs or Trauma Team supply you with stuff in exchange for your services.", "You have a backdoor into a few Corporate or Hospital warehouses.", "You hit the Night Markets and score deals whenever you can."],
}
const mediaLifepath = {
    type: ["Blogger", "Writer (Books)", "Videographer", "Documentation", "Investigative Reporter", "Street Scribe"],
    workReach: ["Monthly magazine", "Blog", "Mainstream vid feed", "News channel", "'Book' sales", "Screamsheets"],
    ethical: ["Fair, honest reporting, strong ethical practices. You only report the verifiable truth.", "Fair and honest reporting, but willing to go on hearsay and rumor if that's what it takes.", "Will occasionally slip and do unethical things, but it's rare. You have some standards.", "Willing to bend any rules to get the bad guys. But only the bad guys.", "Ruthless and determined to make it big, even if it means breaking the law. You're a muckraker.", "Totally corrupt. You take bribes, engage in illegal, unethical reporting all the time. Your pen is for hire to the highest bidder."],
    storyType: ["Political Intrigue", "Ecological Impact", "Celebrity News", "Corporate Takedowns", "Editorials", "Propaganda" ],
}
const executiveLifepath = {
    type: ["Financial", "Media and Communications", "Cybertech and Medical Technologies", "Pharmaceuticals and Biotech", "Food, Clothing, or other General Consumables", "Energy Production", "Personal Electronics and Robotics", "Corporate Services", "Consumer Services", "Real Estate and Construction"],
    division: ["Procurement", "Manufacturing", "Research and Development", "Human Resources", "Public Affairs/Publicity/Advertising", "Mergers and Acquisitions"],
    ethical: ["Always working for good, fully supporting ethical practices.", "Operates as a fair and honest business all the time.", "Will occasionally slip and do unethical things, but it's rare.", "Willing to bend the rules to get what it needs.", "Ruthless and profit-centered, willing to do some bad things.", "Totally evil. Will engage in illegal, unethical business all the time."],
    corpLocation: ["One city", "Several cities", "Statewide", "National", "International, offices in a few major cities", "International, offices everywhere" ],
    corpEnemy: ["Rival Corp in the same industry.", "Law enforcement is watching you.", "Local Media wants to bring you down.", "Different divisions in your own company are feuding with each other.", "Local government doesn't like your Corp.", "International Corporations are eyeing you for a hostile takeover." ],
    bossState: ["Your Boss mentors you but watch out for their enemies.", "Your Boss gives you a free hand and doesn't want to know what you're up to.", "Your Boss is a micromanager who tries to meddle in your work.", "Your Boss is a psycho whose unpredictable outbursts are offset by quiet paranoia.", "Your Boss is cool and watches your back against rivals.", "Your Boss is threatened by your meteoric rise and is planning to knife you." ],
}
const lawmanLifepath = {
    type: ["Guard", "Standard Beat or Patrol", "Criminal Investigation", "Special Weapons and Tactics", "Motor Patrol", "Internal Affairs"],
    jurisdiction: ["Corporate Zones", "Standard City Patrol Zones", "Combat Zones", "Outer City", "Recovery Zones", "Open Highways"],
    ethical: ["Fair, honest policing, strong ethical practices.", "Fair and honest policing, but hard on lawbreakers.", "Will occassionally slip and do unethical things, but it's rare.", "Willing to bend any rules to get the bad guys.", "Ruthless and determined to control The Street, even if it means breaking the law.", "Totally corrupt. You take bribes, engage in illegal, and unethical business all the time."],
    lawmanEnemy: ["Organized Crime", "Boostergangs", "Police Accountability Group", "Dirty Politicians", "Smugglers", "Street Criminals" ],
    lawmanTarget: ["Organized Crime", "Boostergangs", "Drug Runners", "Dirty Politicians", "Smugglers", "Street Crime" ],
}
const fixerLifepath = {
    type: ["Broker deals between rival gangs.", "Procure rare or atypical resources for exclusive clientele.", "Specialize in brokering Solo or Tech services as an agent.", "Supply a regular resource for the Night Markets, like food, medicines, or drugs.", "Procure highly illegal resources, like street drugs or milspec weapons.", "Supply resources for Techs and Medtechs, like parts and medical supplies.", "Operate several successful Night Markets, although not as owner.", "Broker use contracts for heavy machinery, military vehicles, and aircraft.", "Broker deals as a fence for scavengers raiding Corps or Combat Zones.", "Act as an exclusive agent for a Media, Rockerboy, or a Nomad Pack."],
    aloneOrPartner: ["Work Alone", "Got a Partner"],
    partner: ["Family member", "Old friend", "Possible romantic partner as well", "Mentor", "Secret partner with mob/gang connections", "Secret partner with Corporate connections."],
    workspace: ["You don't have one. You like to keep it mobile.", "A booth in a local bar.", "All Data Pool messages and anonymous dead drops.", "Spare room in a warehouse. shop, or clinic.", "An otherwise abandoned building.", "The lobby of a cube hotel." ],
    sideClients: ["Local Rockerboys and Media who use you to get them gigs or contacts.", "Local gangers who also protect your work area or home.", "Corporate Execs who use you for 'black project' procurement work.", "Local Solos or other combat types who use you to get them jobs or contacts.", "Local Nomads and Fixers who use you to set up transactions or deals.", "Local politicos or Execs who depend on you for finding out information."],
    fixerEnemy: ["Combat Zone gangers who want you to work for them exclusively.", "Rival Fixers trying to steal your clients.", "Execs who want you to work for them exclusively.", "Enemy of a former client who wants to clean up 'loose ends'--like you.", "Old client who thinks you screwed them over.", "Rival Fixer trying to beat you out for resources and parts."],
    operationZone:["Badlands", "Upper Marina", "University District", "Downtown", "Little Europe", "Hot Zone", "Pacifica", "Rancho Coronado", "Heywood", "Santo Domingo", "Little China", "Old Japantown", "Old Combat Zone", "South Night City", "New Westbrook", "Watson", "Kabuki", "The Glen"]
}
const nomadLifepath = {
    packSize: ["A single extended tribe or family", "A couple dozen members", "Forty or fifty members", "A hundred or more members", "A Blood Family (hundreds of members)", "An Affiliated Family (made of several Blood Families)"],
    landAirOrSea: ["Land", "Air", "Sea"],
    landWorkType: ["Gogang", "Passenger transport", "Chautauqua/school", "Traveling show/carnival", "Migrant farmers", "Cargo transport", "Shipment protection", "Smuggling", "Mercenary army", "Construction work gang"],
    airWorkType: ["Air piracy", "Cargo transport", "Passenger transport", "Aircraft protection", "Smuggling", "Combat support"],
    seaWorkType: ["Piracy", "Cargo transport", "Passenger transport", "Smuggling", "Combat support", "Submarine warfare"],
    packWork: ["Scout (navigator)", "Outrider (protection, weapons)", "Transport pilot/driver", "Loadmaster (large cargo mover, trucker)", "Solo smuggler", "Procurement (fuel, vehicles, etc.)" ],
    philosophy: ["Always working for good; your Pack accepts others, just wants to get along.", "It's more like a family business. Operates as a fair and honest concern.", "Will occasionally slip and do unethical things, but it's rare.", "Willing to bend the rules whenever they get in the way to get what the Pack needs.", "Ruthless and self-centered, willing to do some bad things if it will get the Pack ahead.", "Totally evil. You rage up and down the highways, killing, looting, and just terrorizing everyone."],
    nomadEnemy: ["Organized Crime", "Boostergangs", "Drug Runners", "Dirty Politicians", "Rival Packs in the same business", "Dirty Cops"],
}

const skillsByStat = {
    INT: [
        "Conceal/Reveal Object", "Lip Reading", "Perception", "Tracking", "Accounting",
        "Animal Handling", "Bureaucracy", "Business", "Composition", "Criminology",
        "Cryptology", "Deduction", "Education", "Gamble", "Library Search", "Science", "Tactics", "Wilderness Survival"
    ],
    REF: [
        "Drive Land Vehicle", "Pilot Air Vehicle (x2)", "Pilot Sea Vehicle", "Riding", "Archery",
        "Autofire (x2)", "Handgun", "Heavy Weapons (x2)", "Shoulder Arms"
    ],
    DEX: [
        "Athletics", "Contortionist", "Dance", "Stealth", "Brawling", "Evasion",
        "Martial Arts (x2)", "Melee Weapon"
    ],
    TECH: [
        "Play Instrument", "Air Vehicle Tech", "Basic Tech", "Cybertech", "Demolitions",
        "Electronics/Security Tech (x2)", "First Aid", "Forgery", "Land Vehicle Tech",
        "Paint/Draw/Sculpt", "Paramedic (x2)", "Photography/Film", "Pick Lock", "Pick Pocket",
        "Sea Vehicle Tech", "Weaponstech"
    ],
    COOL: [
        "Acting", "Bribery", "Interrogation", "Persuasion", "Personal Grooming",
        "Streetwise", "Trading", "Wardrobe & Style"
    ],
    WILL: [
        "Concentration", "Resist Torture/Drugs"
    ],
    LUCK: [],
    MOVE: [],
    BODY: [],
    EMP: [
        "Conversation", "Human Perception"
    ]
};

const defaultSkills = {
    "Athletics": 2, "Brawling": 2, "Concentration": 2, "Conversation": 2, "Education": 2,
    "Evasion": 2, "First Aid": 2, "Human Perception": 2, "Language (Streetslang)": 2,
    
    "Perception": 2, "Persuasion": 2, "Stealth": 2
};
const rolePreferences = {
    Rockerboy: {
        primaryStats: ["COOL", "EMP", "WILL"],
        secondaryStats: ["DEX", "REF"],
        preferredSkills: ["Play Instrument", "Wardrobe & Style", "Personal Grooming", "Melee Weapon", "Handgun", "Streetwise", "Brawling", "Evasion", "First Aid", "Human Perception", "Persuasion", "Composition"],
    },
    Solo: {
        primaryStats: ["COOL", "REF", "DEX"],
        secondaryStats: ["BODY", "WILL", "INT"],
        preferredSkills: ["Shoulder Arms", "Interrogation", "Resist Torture/Drugs", "Evasion", "First Aid", "Melee Weapon", "Autofire (x2)", "Handgun", "Perception", "Streetwise", "First Aid", "Tactics"],
    },
    Netrunner: {
        primaryStats: ["REF", "TECH", "DEX"],
        secondaryStats: ["INT", "WILL", "LUCK"],
        preferredSkills: [ "Basic Tech", "Education", "Conceal/Reveal Object", "Evasion", "Stealth", "Handgun", "Cybertech", "Electronics/Security Tech (x2)", "Cryptography", "Library Search"],
    },
    Tech: {
        primaryStats: ["TECH", "INT", "REF"],
        secondaryStats: ["DEX", "EMP"],
        preferredSkills: ["Education", "Evasion", "First Aid", "Basic Tech", "Cybertech", "Electronics/Security Tech (x2)", "Shoulder Arms", "Air Vehicle Tech", "Land Vehicle Tech", "Sea Vehicle Tech", "Weaponstech", "Science", ],
    },
    Medtech: {
        primaryStats: ["TECH", "INT", "EMP"],
        secondaryStats: ["DEX", "REF", "WILL"],
        preferredSkills: ["Concentration", "Resist Torture/Drugs", "Drive Land Vehicle", "Endurance", "Evasion", "Shoulder Arms", "Handgun", "Human Perception", "Basic Tech", "Cybertech", "First Aid", "Paramedic (x2)", "Deduction", "Education", "Library Search", "Science" ],
    },
    Executive: {
        primaryStats: ["COOL", "INT"],
        secondaryStats: ["EMP", "LUCK", "DEX", "REF"],
        preferredSkills: ["Concentration", "Lip Reading", "Acting", "Handgun", "Bribery", "Conversation", "Human Perception", "Persuasion", "Personal Grooming", "Wardrobe & Style", "Forgery", "Accounting", "Bureaucracy", "Business", "Deduction", "Education", "Gamble"],
    },
    Media: {
        primaryStats: ["INT", "COOL", "EMP"],
        secondaryStats: ["DEX", "WILL", "REF"],
        preferredSkills: ["Concentration", "Conceal/Reveal Object", "Lip Reading", "Perception", "Resist Torture/Drugs", "Stealth", "Library Search", "Education", "Deduction", "Composition", "Bureaucracy", "Photography/Film", "Paint/Draw/Sculpt", "Forgery", "Wardrobe & Style", "Streetwise", "Personal Grooming", "Persuasion", "Conversation", "Human Perception", "Bribery", "Handgun", "Acting"],
    },
    Lawman: {
        primaryStats: ["WILL", "REF", "COOL"],
        secondaryStats: ["DEX", "BODY", "INT"],
        preferredSkills: ["Concentration", "Conceal/Reveal Object", "Perception", "Tracking", "Resist Torture/Drugs", "Athletics", "Endurance", "Stealth", "Drive Land Vehicle", "Riding", "Brawling", "Evasion", "Martial Arts (x2)", "Melee Weapon", "Handgun", "Shoulder Arms", "Acting", "Autofire (x2)", "Bribery", "Conversation", "Human Perception", "Interrogation", "Forgery", "Criminology", "Deduction", "Library Search", "Tactics"],
    },
    Fixer: {
        primaryStats: ["INT", "COOL", "EMP"],
        secondaryStats: ["DEX", "LUCK"],
        preferredSkills: ["Conceal/Reveal Object", "Lip Reading", "Perception", "Resist Torture/Drugs", "Stealth", "Evasion", "Acting", "Handgun", "Bribery", "Conversation", "Human Perception", "Interrogation", "Persuasion", "Streetwise", "Basic Tech", "Forgery", "Pick Lock", "Pick Pocket", "Business", "Gamble", "Trading", "Bureaucracy", "Accounting", "Library Search"],
    },
    Nomad: {
        primaryStats: ["DEX","COOL", "WILL"],
        secondaryStats: ["REF", "BODY", "TECH"],
        preferredSkills: ["Perception", "Tracking", "Athletics", "Endurance", "Drive Land Vehicle", "Pilot Air Vehicle (x2)", "Pilot Sea Vehicle (x2)", "Riding", "Brawling", "Evasion", "Melee Weapon", "Play Instrument", "Archery", "Handgun", "Shoulder Arms", "Streetwise", "Trading", "Air Vehicle Tech", "Land Vehicle Tech", "Sea Vehicle Tech", "Basic Tech", "Demolitions (x2)", "Animal Handling", "Wilderness Survival" ],
    },
    // Add more roles as needed
};
const weapons = {
    Ranged: {
        SMG: ["SMG"],
        HeavySMG: ["Heavy SMG"],
        MediumPistol: ["Medium Pistol"],
        HeavyPistol: ["Heavy Pistol"],
        VeryHeavyPistol: ["Very Heavy Pistol"],
        Shotgun: ["Shotgun"],
        AssaultRifle: ["Assault Rifle"],
        Sniper: ["Sniper"],
        BowsCrossbows: ["Bow", "Crossbow"],
        GrenadeLauncher: ["Grenade Launcher"],
        RocketLauncher: ["Rocket Launcher"],
    },
    Melee: {
        Light: ["Combat Knife", "Broken Bottle", "Dive Knife", "Tomahawk", "Stickball Stick"],
        Medium: ["Baseball Bat", "Crowbar", "Machete", "Stun Baton"],
        Heavy: ["Chain", "Lead Pipe", "Sword", "Spiked Bat"],
        VeryHeavy: ["Chainsaw", "Naginata", "Sledge Hammer", "Helicopter Blade"],
    },
    Exotic: [
        "Air Pistol", "Battleglove", "Constitutional Arms Hurricane Assault Weapon", "Dartgun", "Flamethrower", "Kendachi Mono-Three", "Malorian Arms 3516", "Microwaver", "Militech 'Cowboy' U-56 Grenade Launcher", "Rhinemetall EMG-86 Railgun", "Shrieker", "Stun Baton", "Stun Gun", "Tsunami Arms Helix", 
    ],
};
const manufacturers = {
    BudgetArms: { quality: ["Poor"], types: ["Pistol", "SMG"] },
};
const weaponQualities = {
    Poor: ["Everyday", "Costly", "Premium"],
    Standard: ["Costly", "Premium", "Expensive"],
    Excellent: ["Premium", "Expensive", "Very Expensive"]
};

const priceValues = {
    Everyday: 20,
    Costly: 50,
    Premium: 100,
    Expensive: 500,
    VeryExpensive: 1000
};
