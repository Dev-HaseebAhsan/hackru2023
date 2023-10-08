const dictionary = {
    classes : {
        //class -> {armorProficiencies : [], skill_proficiency : [], weapon_proficiency : [], saving_proficiency : [] hit_die : int}
        'Fighter' : {
            armorProficiencies : [
                'Light Armor',
                'Medium Armor',
                'Heavy Armor',
                'Shields'
            ],
            skillProficiencies : [
                'Acrobatics', 
                'Animal Handling', 
                'Athletics',
                'History',
                'Insight',
                'Intimidation',
                'Perception',
                'Survival'
            ],
            weaponProficiencies : [
                'Simple Weapons',
                'Martial Weapons'
            ],
            savingProficiencies : [
                'Strength',
                'Constitution'
            ],
            hitDie : 10
        },
        'Ranger' : {
            armorProficiencies : [
                'Light Armor',
                'Medium Armor',
                'Shields'
            ],
            skillProficiencies : [
                'Animal Handling',
                'Athletics',
                'Insight', 
                'Investigation', 
                'Nature', 
                'Perception', 
                'Stealth', 
                'Survival'
            ],
            weaponProficiencies : [
                'Simple Weapons',
                'Martial Weapons'
            ],
            savingProficiencies : [
                'Strength',
                'Dexterity'
            ],
            hitDie : 10
        },
        'Wizard' : {
            armorProficiencies : [

            ],
            skillProficiencies : [
                'Arcana', 
                'History', 
                'Insight', 
                'Investigation', 
                'Medicine', 
                'Religion'
            ],
            weaponProficiencies : [
                'Daggers',
                'darts', 
                'slings', 
                'quarterstaffs', 
                'light crossbows'
            ],
            savingProficiencies : [
                'Intelligence',
                'Wisdom'
            ],
            hitDie : 6
        }
    },

    //race -> {Ability Score Increases, skillProficiencies, size, wspeed, resistances}
    races : {
        'Human' : {
            ASIMods : {
                'Strength' : 1,
                'Dexterity' : 1,
                'Constitution' : 1,
                'Intelligence' : 1,
                'Wisdom' : 1,
                'Charisma' : 1
            },
            weaponProficiencies : [
                'Battleaxe',
                'Handaxe',
                'Light Hammer',
                'War Hammer'
            ],
            skillProficiencies : [
                'History (Stonework Expertise)'
            ],
            size : 'Medium',
            wspeed : 30,
            fspeed : 0,
            sspeed : 0,
            cspeed : 0,
            resistances : [],
            advantagesAgainst : [],
            immunities: []
        },
        'Elf' : {
            ASIMods : {
                'Strength' : 0,
                'Dexterity' : 2,
                'Constitution' : 0,
                'Intelligence' : 0,
                'Wisdom' : 0,
                'Charisma' : 0
            },
            weaponProficiencies : [],
            skillProficiencies : [
                'Perception'
            ],
            size : 'Medium',
            wspeed : 30,
            fspeed : 0,
            sspeed : 0,
            cspeed : 0,
            resistances : [],
            advantagesAgainst : ['Charm'],
            immunities: ['Sleep']
        },
        'Dwarf' : {
            ASIMods : {
                'Strength' : 1,
                'Dexterity' : 1,
                'Constitution' : 1,
                'Intelligence' : 1,
                'Wisdom' : 1,
                'Charisma' : 1
            },
            weaponProficiencies : [],
            size : 'Medium',
            wspeed : 25,
            fspeed : 0,
            sspeed : 0,
            cspeed : 0,
            resistances : ['Poison'],
            advantagesAgainst : ['Poison (Save)'],
            immunities : []
        }
    }
};