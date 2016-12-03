//
// Battle Helper
//   by Joe Miller
//
// Select the type you want to attack from the dropdown list
// See the types that are effective against that type
//


// Triggesrs when user has selected a type to defend from selector
function defenderChanged() {
    var defenderTypes = getDefenderTypes();
    var attackers = getAttackers(defenderTypes);
    showAttackers(attackers);
};

// Get the defender selected by the user
function getDefenderTypes() {
    var defenderTypes = [];
    var defenderList1 = document.getElementById("defender1");
    var defenderList2 = document.getElementById("defender2");
    var defender1 = defenderList1.options[defenderList1.selectedIndex].value;
    var defender2 = defenderList2.options[defenderList2.selectedIndex].value;
    if (defender1.length > 0) { defenderTypes.push(defender1) };
    if (defender2.length > 0) { defenderTypes.push(defender2) };
    return defenderTypes;
};

// Show list of attackers to user
function showAttackers(attackers) {
    var attackerElement = document.getElementById("attacker");
    attackerElement.textContent = attackers;
};

// Get the attackesr for each defender type
function getAttackers(defenderTypes) {
    var attackers = [];
    for (var type in defenderTypes) {
        var defender = defenderTypes[type];
        var newAttackers = findStrongAttackers(defender);
        attackers = attackers.concat(newAttackers);
    }
    // If there is only one defender type, narrow down the attackers
    if (defenderTypes.length == 1) {
        attackers = narrowDown(attackers, defender);
    } 
    // If there are multiple defender types, find the strongest attackers
    else {
        var strongestAttackers = findStrongestAttackers(defenderTypes);
        if (strongestAttackers.length > 0) { 
            attackers = strongestAttackers;
        }
    }
    return attackers;
};

function findStrongestAttackers(defenderTypes) {
    var strongestAttackers = [];
    var strongAttackers = [];
    for (var type in defenderTypes) {
        var defender = defenderTypes[type];
        var newAttackers = findStrongAttackers(defender);
        for (var a in newAttackers) {
            var attacker = newAttackers[a];
            if(strongAttackers.indexOf(attacker) > -1) {
                strongestAttackers.push(attacker);
            } else {
                strongAttackers.push(attacker);
            }
        }
    }
    return strongestAttackers;
};

// Find the strongest types to attack the chosen type defender
function findStrongAttackers(defender) {
    var attackers = [];
    // Find which types are strong against the defending type
    for (var type in types) {
        var strongAgainst = types[type].strong;
        if (strongAgainst.indexOf(defender) > -1) {
            attackers.push(type);
        }
    }
    return attackers;
};

// Narrow down attackers based on defender's weakness to the attacker
function narrowDown(attackers, defender) {
    var noEffect = [];
    var weakAgainst = [];
    for (var attacker in attackers) {
        if (types[defender].noEffect.indexOf(attackers[attacker]) > -1) {
            noEffect.push(attackers[attacker]);
        }
        if (types[defender].weak.indexOf(attackers[attacker]) > -1) {
            weakAgainst.push(attackers[attacker]);
        }
    }
    // Narrow down attackers to those the defender is weak against
    if (weakAgainst.length > 0) {
        attackers = weakAgainst;
    }
    // Narrow down to a type that the defender has no effect on
    if (noEffect.length > 0) {
        attackers = noEffect;
    }
    return attackers;
};

// Array of the names of the types
function getTypes() {
    var typeArray = [];
    for (var type in types) {
        typeArray.push(type);
    }
    return typeArray;
};