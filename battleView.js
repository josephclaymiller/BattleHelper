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
    var defenderType1 = defenderList1.options[defenderList1.selectedIndex].value;
    var defenderType2 = defenderList2.options[defenderList2.selectedIndex].value;
    if (defenderType1.length > 0) { defenderTypes.push(defenderType1) };
    if (defenderType2.length > 0) { defenderTypes.push(defenderType2) };
    return defenderTypes;
};

// Show list of attackers to user
function showAttackers(attackers) {
    var strongAttackers = attackers["strong"];
    var weakAttackers = attackers["weak"];
    var noAttackers = attackers["non"];
    // show strong attackers
    var strongAttackersElement = document.getElementById("strongAttackers");
    strongAttackersElement.textContent = strongAttackers.sort(); // alphabetical order
    // show weak attackers
    var weakAttackersElement = document.getElementById("weakAttackers");
    weakAttackersElement.textContent = weakAttackers.sort(); 
    // show no attackers
    var noAttackersElement = document.getElementById("noAttackers");
    noAttackersElement.textContent = noAttackers.sort(); 
};