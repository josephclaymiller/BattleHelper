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
    var superStrongAttackers = [];
    var strongAttackers = [];
    var weakAttackers = [];
    var superWeakAttackers = [];
    var noAttackers = [];
    var strongWeakAttakers = [];
    defenderTypes.forEach(function(type) {
        attackersforType = getAttackersForDefenderType(type);
        strongAttackers = strongAttackers.concat(attackersforType["strong"]);
        weakAttackers = weakAttackers.concat(attackersforType["weak"]);
        noAttackers = noAttackers.concat(attackersforType["non"]);
    });   
    // if same type in no effect, remove duplicate
    noAttackers = removeDuplicates(noAttackers);
    // if same type in strong, remove and add to super strong
    superStrongAttackers = findDuplicates(strongAttackers);
    if (superStrongAttackers.length > 0) {
        strongAttackers = removeElements(strongAttackers, superStrongAttackers);
    }
    // if same type in weak, remove and add to super weak
    superWeakAttackers = findDuplicates(weakAttackers);
    if (superWeakAttackers.length > 0) {
        weakAttackers = removeElements(weakAttackers, superWeakAttackers);
    }
    // if same type in strong and weak, remove from both
    strongWeakAttakers = findDuplicates(strongAttackers.concat(weakAttackers));
    if (strongWeakAttakers.length > 0) {
        strongAttackers = removeElements(strongAttackers, strongWeakAttakers);
        weakAttackers = removeElements(weakAttackers, strongWeakAttakers);
    }


    attackers = {
        "superStrong": superStrongAttackers, 
        "strong": strongAttackers, 
        "weak": weakAttackers, 
        "superWeak": superWeakAttackers, 
        "non":noAttackers
    };
    return attackers;
};

function getAttackersForDefenderType(type) {
    var attackers = [];
    var strongAttackers = [];
    var weakAttackers = [];
    var noAttackers = [];
    strongAttackers = strongAttackers.concat(findStrongAttackers(type));
    weakAttackers = weakAttackers.concat(findWeakAttackers(type));
    noAttackers = noAttackers.concat(findNoAttackers(type));

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

// Remove duplicates in the attackers list
function findDuplicates(arr) {
    var uniqueArr = [];
    var duplicates = [];
    for (var a =0; a < arr.length; a++) {
        var element = arr[a];
        if (uniqueArr.includes(element)) { 
            duplicates.push(element);
        } else {
            uniqueArr.push(element);
        }
    }
    return duplicates;
};

// remove from an array elements that exists in another array
function removeElements(keepArr, removeArr) {
    var filteredArr = [];
    for (var a =0; a < keepArr.length; a++) {
        var element = keepArr[a];
        if (removeArr.includes(element)) { continue; }
        filteredArr.push(element);
    }
    return filteredArr;
};