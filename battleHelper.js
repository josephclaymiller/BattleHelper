//
// Battle Helper
//   by Joe Miller
//
// Select the type you want to attack from the dropdown list
// See the types that are effective against that type
//

// Get the attackers for each defending type
function getAttackers(defenderTypes) {
    var attackers = [];
    var strongAttackers = [];
    var weakAttackers = [];
    var noAttackers = [];
    defenderTypes.forEach(function(type) {
        weakAttackers = weakAttackers.concat(findWeakAttackers(type));
        noAttackers = noAttackers.concat(findNoAttackers(type));
    });
    weakAttackers = removeDuplicates(weakAttackers);
    noAttackers = removeDuplicates(noAttackers);
    strongAttackers = getStrongAttackers(defenderTypes, weakAttackers, noAttackers);
    attackers = {"strong": strongAttackers, "weak": weakAttackers, "non":noAttackers};
    return attackers;
};

function getStrongAttackers(defenderTypes, weakAttackers, noAttackers) {
    var strongAttackers = [];
    var validAttackers = [];
    defenderTypes.forEach(function(type) {
        strongAttackers = strongAttackers.concat(findStrongAttackers(type));
    });
    strongAttackers = removeDuplicates(strongAttackers);
    // Add the strong attackers to the list of attackers
    // Only if they are not in the list of weak or no attakers
    for (var a =0; a < strongAttackers.length; a++) {
        var attacker = strongAttackers[a];
        if (weakAttackers.indexOf(attacker) > -1) { continue; }
        if (noAttackers.indexOf(attacker) > -1) { continue; }
        validAttackers.push(attacker);
    }
    strongAttackers = validAttackers;
    return strongAttackers; 
};

// Find which types are strong against 1 defending type
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

// Find which types are weak against 1 defending type
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

// Find which types which have no effect against 1 defending type
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

//////////////////////
// Helper Functions //
//////////////////////

// Array of the names of the types
function getTypes() {
    var typeArray = [];
    for (var type in types) {
        typeArray.push(type);
    }
    return typeArray;
};

// Remove duplicates in the attackers list
function removeDuplicates(arr) {
    var uniqueArr = [];
    for (var a =0; a < arr.length; a++) {
        var element = arr[a];
        if (uniqueArr.includes(element)) { continue; }
        uniqueArr.push(element);
    }
    return uniqueArr;
};