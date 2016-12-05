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
    var strongAttackers = [];
    var weakAttackers = [];
    var noAttackers = [];
    for (var type in defenderTypes) {
        var defender = defenderTypes[type];
        // find strong attackers
        strongAttackers = strongAttackers.concat(findStrongAttackers(defender));
        // find weak attackers
        weakAttackers = weakAttackers.concat(findWeakAttackers(defender));
        // find no attackers
        noAttackers = noAttackers.concat(findNoAttackers(defender));
    }
    // Add the strong attackers to the list of attackers
    // Only if they are not in the list of weak or no attakers
    // attackers = strongAttackers;
    for (var a in strongAttackers) {
        var attacker = strongAttackers[a];
        if(weakAttackers.indexOf(attacker) > -1) { continue; }
        if(noAttackers.indexOf(attacker) > -1) { continue; }
        attackers.push(attacker);
    }

    // Finds strongest attackers in the attackers list
    // and resolves duplicates
    var strongestAttackers = findStrongestAttackers(defenderTypes);
    if (strongestAttackers.length > 0) { 
        attackers = strongestAttackers;
    }
    return attackers;
};

// Find the strongest types to attack the chosen type defender
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

// Find which types are strong against the defending type
function findStrongAttackers(defender) {
    var strongAttackers = [];
    for (var type in types) {
        var strongAgainst = types[type].strong;
        if (strongAgainst.indexOf(defender) > -1) {
            strongAttackers.push(type);
        }
    }
    return strongAttackers;
};

// Find which types are weak against the defending type
function findWeakAttackers(defender) {
    var weakAttackers = [];
    for (var type in types) {
        var weakAgainst = types[type].weak;
        if (weakAgainst.indexOf(defender) > -1) {
            weakAttackers.push(type);
        }
    }
    return weakAttackers;
};

// Find which types which have no effect against the defending type
function findNoAttackers(defender) {
    var noAttackers = [];
    for (var type in types) {
        var weakAgainst = types[type].noEffect;
        if (weakAgainst.indexOf(defender) > -1) {
            noAttackers.push(type);
        }
    }
    return noAttackers;
};

// Array of the names of the types
function getTypes() {
    var typeArray = [];
    for (var type in types) {
        typeArray.push(type);
    }
    return typeArray;
};