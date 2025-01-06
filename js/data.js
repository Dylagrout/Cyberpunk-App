const roles = ['Solo', 'Netrunner', 'Medtech', 'Rockerboy', 'Lawman', 'Executive', 'Tech', 'Media', 'Fixer', 'Nomad'];
const culturalOrigins = [
    { region: "North America", languages: ["English", "Chinese", "Cree", "Creole", "French", "Navajo", "Spanish"] },
    { region: "South/Central America", languages: ["English", "Creole", "German", "Guarani", "Mayan", "Portuguese", "Quechua", "Spanish"] },
    { region: "Western Europe", languages: ["English", "Dutch", "German", "French", "Spanish", "Italian", "Norwegian", "Portuguese"] },
    { region: "Eastern Europe", languages: ["English", "Finnish", "Russian", "Polish", "Romanian", "Ukrainian"] },
    { region: "Middle Eastern/North African", languages: ["English", "Arabic", "Turkish", "Farsi", "Hebrew", "French", "Berber"] },
    { region: "Sub-Saharan African", languages: ["English", "Swahili", "French", "Arabic", "Hausa", "Lingala", "Oromo", "Portuguese", "Twi", "Yoruba"] },
    { region: "South Asian", languages: ["English", "Bengali", "Dari", ,"Hindi", "Nepali", "Urdu", "Tamil", "Sinhalese"] },
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
const environment = ['Ran on The Street, with no adult supervision.', 'Spent in a safe Corp Zone walled off from the rest of the City', 'In a Nomad Pack moving from place to place.', 'In a Nomad pack with roots in transport (ships, planes, caravans).', 'In a decaying, once upscale neighborhood, now holding off the bossters to survive.', 'In the heart of the Combat Zone, living in a wrecked building or other squat.', 'In a huge "megastructure" building controlled by a Corp or the City.', 'In the ruins of a deserted town or city taken over by Reclaimers.', 'In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people.', 'In a Corporate luxury "starscraper," high above the rest of the teeming rabble.'];
const familyCrisis = ['Your family lost everything through betrayal.', 'Your family lost everything through bad management.', 'Your family was exiled or otherwise driven from their original home/nation/Corporation.', 'Your family is imprisoned, and you alone escaped.', 'Your family vanished. You are the only remaining member.', 'Your family was killed, and you were the only survivor.', 'Your family is involved in a long-term conspiracy, organization, or association, such as a crime family or revolutionary group.', 'Your family was scattered to the winds due to misfortune.', 'Your family is cursed with a hereditary feud that has lasted for generations.', 'You are the inheritor of a family debt; you must honor this debt before moving on with your life.'];
const lifepaths = ['Streetwise orphan', 'Corporate dropout', 'Nomad wanderer'];
// Add more data as needed
