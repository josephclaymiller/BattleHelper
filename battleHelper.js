// Battle Helper
//
// Select the type you want to attack from the dropdown list
// See the types that are effective against that type
//


// Triggesrs when user has selected a type to defend from selector
function defenderChanged() {
    var defender = getDefender();
    showAttacker(defender);
};

// Find the best type to attack the chosen type defender
function showAttacker(defender) {
    var attackerElement = document.getElementById("attacker");
    var attackers = findAttackers(defender);
    // Show list of attackers as text of attacker span in HTML
    attackerElement.textContent = attackers;
};

// Get the selected defender from the HTML defender selector
function getDefender() {
    var defenderList = document.getElementById("defender");
    var defender = defenderList.options[defenderList.selectedIndex].value;
    return defender;
};

// Find which types are strong against the defending type
function findAttackers(defender){
    var attackers = [];
    for (var type in types) {
        // console.log(type + " is strong against " + types[type].strong);
        var strongAgainst = types[type].strong;
        if (strongAgainst.indexOf(defender) > -1) {
            attackers.push(type);
        }
    }
    return attackers;
    // If there are multiple possible attackers:
    // Choose a type that the defender has no effect on if there is one
    // Narrow down attackers to those the defender is weak against
}

// Array of the names of the types
function getTypes(){
    var typeArray = [];
    for (var type in types) {
        typeArray.push(type);
    }
    return typeArray;
}

// Object to store the strengths and weaknesses of each type
var types = {
    "water":{
        "strong":["fire","ground","rock"],
        "weak":["water","grass","dragon"],
        "noEffect":[]
    },
    "fire":{
        "strong":["grass","ice","bug"],
        "weak":["fire","water","rock","dragon"],
        "noEffect":[]
    },
    "grass":{
        "strong":["water"],
        "weak":["fire","grass","dragon"],
        "noEffect":[]
    },
    "normal":{
        "strong":[],
        "weak":["rock","steel"],
        "noEffect":["ghost"]
    },
    "fighting":{
        "strong":["normal","rock","steel","ice","dark"],
        "weak":["flying","poison","bug","psychic","fairy"],
        "noEffect":["ghost"]
    },
    "flying":{
        "strong":["fighting","bug","grass"],
        "weak":["rock","steel","electric"],
        "noEffect":[]
    },
    "poison":{
        "strong":["grass","fairy"],
        "weak":["poison","ground","rock","ghost"],
        "noEffect":["steel"]
    },
    "ground":{
        "strong":["poison","rock","steel","fire","electric"],
        "weak":["bug","grass"],
        "noEffect":["flying"]
    },
    "rock":{
        "strong":["flying","bug","fire","ice"],
        "weak":["fighting","ground","steel"],
        "noEffect":[]
    },
    "bug":{
        "strong":["grass","psychic","dark"],
        "weak":["fighting","flying","poison","ghost","steel","fire","fairy"],
        "noEffect":[]
    },
    "ghost":{
        "strong":["ghost","psychic"],
        "weak":["dark"],
        "noEffect":["normal"]
    },
    "steel":{
        "strong":["rock","ice","fairy"],
        "weak":["steel","fire","water","electric"],
        "noEffect":[]
    },
    "electric":{
        "strong":["flying","water"],
        "weak":["grass","electric","dragon"],
        "noEffect":["ground"]
    },
    "psychic":{
        "strong":["fighting","poison"],
        "weak":["steel","psychic"],
        "noEffect":["dark"]
    },
    "ice":{
        "strong":["flying","ground","grass","dragon"],
        "weak":["steel","fire","water","ice"],
        "noEffect":[]
    },
    "dragon":{
        "strong":["dragon"],
        "weak":["steel"],
        "noEffect":["fairy"]
    },
    "dark":{
        "strong":["ghost","psychic"],
        "weak":["fighting","dark","fairy"],
        "noEffect":[]
    },
    "fairy":{
        "strong":["fighting","dragon","dark"],
        "weak":["poison","steel","fire"],
        "noEffect":[]
    }
};