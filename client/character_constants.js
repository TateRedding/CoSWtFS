export const stats = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
];

export const skills = {
    "acrobatics": "dexterity",
    "animal handling": "wisdom",
    "arcana": "intelligence",
    "athletics": "strength",
    "deception": "charisma",
    "history": "intelligence",
    "insight": "wisdom",
    "intimidation": "charisma",
    "investigation": "intelligence",
    "medicine": "wisdom",
    "nature": "wisdom",
    "perception": "wisdom",
    "performance": "charisma",
    "persuasion": "charisma",
    "religion": "intelligence",
    "sleight of hand": "dexterity",
    "stealth": "dexterity",
    "survival": "wisdom"
};

const characters = {
    "Robi Xenon Li": {
        portrait: "/public/portraits/plain_female.png",
        player: "Nina Redding",
        level: 3,
        species: "Air Genasi",
        class: "Ranger",
        subclass: "Monster Hunter",
        alignment: "Lawful Neutral",
        background: "Folk Hero",
        age: 0,
        height: 0,
        weight: 0,
        eyes: "brown",
        skin: "pale",
        hair: "brown",
        base_stats: {
            strength: 10,
            dexterity: 16,
            constitution: 10,
            intelligence: 12,
            wisdom: 14,
            charisma: 13
        },
        proficiency_score: 2,
        proficiencies: {
            saving_throws: [
                "strength",
                "dexterity"
            ],
            skills: [
                "animal handling",
                "athletics",
                "perception",
                "stealth",
                "survival",
            ],
            other: {
                languages: [
                    "common",
                    "primordial",
                    "goblin"
                ],
                armor: [
                    "light armor",
                    "medium armor",
                    "sheilds"
                ],
                weapons: [
                    "simple weapons",
                    "martial weapons"
                ],
                vehicles: [
                    "land"
                ],
                tools: [
                    "glassblower's tools"
                ]
            }
        },
        armor_class: 14,
        speed: 30,
        hp: 16,
        traits: {
            personality: [
                "Decisive",
                "Doesn't tend to take things personally unless under threat",
                "Impulsive",
                "Unapologetic"
            ],
            ideals: [
                "I value fairness and honesty (this is not synonymous with kindness and mercy)."
            ],
            bonds: [
                "I will release the curse from the china shop where I was born."
            ],
            flaws: [
                "I have trouble trusting in my allies."
            ],
            fears: [
                "Cramped spaces",
                "Maggots",
                "Choking on eggs",
            ],
        },
        features: [
            "Unending Breath",
            "Favored Enemy",
            "Natural Explorer"
        ]
    },
    "Thrall Frostskin": {
        portrait: "/public/portraits/plain_male.png",
        player: "Davis",
        level: 3,
        species: "Half Orc",
        class: "Barbarian/ Fighter",
        subclass: "",
        alignment: "Chaotic Neutral",
        background: "Outlander",
        age: 0,
        height: 0,
        weight: 0,
        eyes: "",
        skin: "",
        hair: "",
        base_stats: {
            strength: 17,
            dexterity: 13,
            constitution: 15,
            intelligence: 10,
            wisdom: 12,
            charisma: 8
        },
        proficiency_score: 2,
        proficiencies: {
            saving_throws: [
                "strength",
                "constitution"
            ],
            skills: [
                "athletics",
                "intimidation",
                "nature",
                "perception",
                "survival"
            ],
            other: {
                languages: [
                    "common",
                    "orcish"
                ],
                armor: [
                    "all armor",
                    "sheilds"
                ],
                weapons: [
                    "simple weapons",
                    "martial weapons"
                ],
                vehicles: [
                    "none"
                ],
                tools: [
                    "none"
                ]
            }
        },
        armor_class: 14,
        speed: 30,
        hp: 22,
        traits: {
            personality: [
            ],
            ideals: [
            ],
            bonds: [
            ],
            flaws: [
            ],
            fears: [

            ],
        },
        features: [
            "Darkvision",
            "Menacing",
            "Relentless Endurance",
            "Savage Attacks",
            "Rage",
            "Unarmored Defense",
            "Danger Sense",
            "Reckless Attack",
            "Great Weapon Fighting",
            "Second Wind"
        ]
    },
    "Khirun of the S.C.": {
        portrait: "/public/portraits/plain_male.png",
        player: "Taylor Holme",
        level: 3,
        species: "Kalashtar",
        class: "Cleric",
        subclass: "",
        alignment: "Chaotic Good",
        background: "Sailor",
        age: 0,
        height: 0,
        weight: 0,
        eyes: "",
        skin: "",
        hair: "",
        base_stats: {
            strength: 13,
            dexterity: 8,
            constitution: 14,
            intelligence: 10,
            wisdom: 17,
            charisma: 13
        },
        proficiency_score: 2,
        proficiencies: {
            saving_throws: [
                "wisdom",
                "charisma"
            ],
            skills: [
                "athletics",
                "insight",
                "medicine",
                "perception",
            ],
            other: {
                languages: [
                    "common",
                    "quori",
                    "elvish"
                ],
                armor: [
                    "all armor",
                    "sheilds"
                ],
                weapons: [
                    "simple weapons",
                    "martial weapons"
                ],
                vehicles: [
                    "water"
                ],
                tools: [
                    "navigator's tools"
                ]
            }
        },
        armor_class: 16,
        speed: 30,
        hp: 17,
        traits: {
            personality: [
                "Never passes up a friendly wager",
                "Work hard, play hard"
            ],
            ideals: [
                "Freedom is being unbound."
            ],
            bonds: [
                "Loyalty to our crew and our mission."
            ],
            flaws: [
                "Pride's gonna be the death of me."
            ],
            fears: [
                "Sharks",
                "Drowning",
                "Being lost in open water",
                "Poison ivy"
            ],
        },
        features: [
            "Dual Mind",
            "Telepathy",
            "Dream Immunity",
            "Wrath of the Storm",
            "Channel Divinity"
        ]
    }
};

export default characters;