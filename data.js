const raceInfo = {

    Human: {

        description:
            "Humans are versatile and adaptable. They don't specialize in one area and can fit almost any class.",

        STR: 0,
        DEX: 0,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 0

    },

    Elf: {

        description:
            "Elves are graceful and naturally gifted with magic. They excel at agility, archery, and arcane studies.",

        STR: -2,
        DEX: 4,
        CON: -2,
        INT: 2,
        WIS: 0,
        CHA: 0

    },

    Dwarf: {

        description:
            "Dwarves are sturdy and resilient. They are known for their craftsmanship, endurance, and bravery.",

        STR: 2,
        DEX: -2,
        CON: 4,
        INT: 0,
        WIS: 0,
        CHA: -2

    },

    Halfling: {

        description:
            "Halflings are small, nimble, and optimistic. They rely on quick thinking, agility, and luck.",

        STR: -2,
        DEX: 4,
        CON: 0,
        INT: 0,
        WIS: 2,
        CHA: 0

    },

    Dragonborn: {

        description:
            "Dragonborn possess draconic ancestry and are known for their strength, pride, and breath weapons.",

        STR: 4,
        DEX: -2,
        CON: 2,
        INT: -2,
        WIS: 0,
        CHA: 2

    },

    Gnome: {

        description:
            "Gnomes are clever inventors and natural problem solvers with a love for discovery and learning.",

        STR: -2,
        DEX: 2,
        CON: 0,
        INT: 4,
        WIS: 0,
        CHA: 0

    },

    "Half-Elf": {

        description:
            "Half-Elves combine human adaptability with elven grace, making them excellent diplomats and adventurers.",

        STR: -2,
        DEX: 2,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: 4

    },

    "Half-Orc": {

        description:
            "Half-Orcs are powerful and determined warriors who excel through strength, endurance, and perseverance.",

        STR: 4,
        DEX: 0,
        CON: 2,
        INT: -2,
        WIS: -2,
        CHA: 0

    },

    Tiefling: {

        description:
            "Tieflings possess infernal heritage and often wield natural magical abilities and strong personalities.",

        STR: -2,
        DEX: 0,
        CON: 0,
        INT: 2,
        WIS: 0,
        CHA: 4

    }

};

const classInfo = {

    Barbarian:
        "Barbarians are fierce frontline warriors who channel primal rage to overwhelm their enemies. Their incredible strength, durability, and fearlessness make them one of the toughest classes in combat. They thrive in close-range battles and can endure punishment that would defeat most adventurers.",

    Bard:
        "Bards are charismatic performers, storytellers, and musicians who weave magic through their art. They support allies with inspiration, healing, and utility spells while also possessing a surprising amount of versatility. A skilled Bard can adapt to nearly any situation.",

    Cleric:
        "Clerics are divine spellcasters who serve powerful gods or sacred ideals. They can heal wounds, protect allies, and unleash holy magic against enemies. Depending on their chosen domain, Clerics can fill the role of healer, warrior, or powerful spellcaster.",

    Druid:
        "Druids are guardians of nature who draw their power from the natural world. They command elemental forces, heal allies, and can transform into animals through Wild Shape. Their connection to nature gives them unique versatility both in and out of combat.",

    Fighter:
        "Fighters are masters of martial combat and weapon expertise. Whether wielding a sword, bow, or heavy armor, Fighters excel through training, discipline, and adaptability. They are reliable warriors capable of handling almost any combat situation.",

    Monk:
        "Monks are disciplined martial artists who harness inner energy known as Ki. They combine speed, agility, and precision to strike opponents with devastating efficiency. Their mobility and unique abilities make them difficult to predict and even harder to catch.",

    Paladin:
        "Paladins are holy warriors bound by sacred oaths and unwavering convictions. They combine martial skill with divine magic, allowing them to protect allies, heal wounds, and smite evil foes. Their strong sense of duty often makes them natural leaders.",

    Ranger:
        "Rangers are skilled hunters, trackers, and explorers who thrive in the wilderness. They excel at ranged combat, survival, and navigating dangerous environments. Rangers often form deep connections with nature and can specialize in fighting specific threats.",

    Rogue:
        "Rogues are agile and cunning adventurers who rely on stealth, precision, and clever tactics. They excel at sneaking, lockpicking, scouting, and exploiting enemy weaknesses. A Rogue's Sneak Attack allows them to deal massive damage when striking at the right moment.",

    Sorcerer:
        "Sorcerers possess innate magical power that flows naturally through their bloodline or supernatural origin. Unlike Wizards who study magic, Sorcerers instinctively wield powerful spells and can shape their magic in unique ways through Metamagic.",

    Warlock:
        "Warlocks gain magical abilities through a pact with a powerful supernatural entity such as a fiend, celestial, or ancient being. Their magic is mysterious and often comes with unique abilities that reflect the nature of their patron.",

    Wizard:
        "Wizards are scholars of the arcane who dedicate years to studying magical theory and spellcraft. They possess the largest variety of spells in the game and can adapt to countless situations through preparation, knowledge, and mastery of magic."

};