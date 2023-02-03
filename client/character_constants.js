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
        level: 2,
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
    }
};

export default characters;