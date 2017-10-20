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
    var superStrongAttackers = attackers["superStrong"];
    var strongAttackers = attackers["strong"];
    var weakAttackers = attackers["weak"];
    var superWeakAttackers = attackers["superWeak"];
    var noAttackers = attackers["non"];
    // Show Attackers in alphabetical order
    // Only show catagory if there is at least 1 type
    // // show super strong attackers
    var superStrongAttackersElement = document.getElementById("superStrong");
    if (superStrongAttackers.length > 0) {
        superStrongAttackersElement.textContent = "Super Strong: ";
        superStrongAttackersElement.textContent += superStrongAttackers.sort(); 
    }
    else {
        superStrongAttackersElement.textContent = "";
    }
    // // show strong attackers
    var strongAttackersElement = document.getElementById("strong");
    if (strongAttackers.length > 0) {
        strongAttackersElement.textContent = "Strong: ";
        strongAttackersElement.textContent += strongAttackers.sort(); 
    }
    else {
        strongAttackersElement.textContent = "";
    }
    // show weak attackers
    var weakAttackersElement = document.getElementById("weak");
    if (weakAttackers.length > 0) {
        weakAttackersElement.textContent = "Weak: "; 
        weakAttackersElement.textContent += weakAttackers.sort(); 
    }
    else {
        weakAttackersElement.textContent = "";
    }
    // show super weak attackers
    var superWeakAttackersElement = document.getElementById("superWeak");
    if (superWeakAttackers.length > 0) { 
        superWeakAttackersElement.textContent = "Super Weak: "; 
        superWeakAttackersElement.textContent += superWeakAttackers.sort(); 
    }
    else {
        superWeakAttackersElement.textContent = "";
    }
    // show no attacker
    var noAttackersElement = document.getElementById("non");
    if (noAttackers.length > 0) {
        noAttackersElement.textContent = "No Effect: "; 
        noAttackersElement.textContent += noAttackers.sort();
    }
    else {
        noAttackersElement.textContent = "";
    }
};

// Generate content when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add defender selecters
    addDefenderSelect("defenderList1", 1);
    addDefenderSelect("defenderList2", 2);
    // Add attacking types
    addAttackingType("attackingTypes", "superStrong");
    addAttackingType("attackingTypes", "strong");
    addAttackingType("attackingTypes", "weak");
    addAttackingType("attackingTypes", "superWeak");
    addAttackingType("attackingTypes", "non");
}, false);

// Create dropdown menues based on types list
function addDefenderSelect(divname, listNum) {
    var newDiv=document.createElement('div');
    var divID = "defender" + listNum;
    var html = 'Type ' + listNum + ': <select id=' + divID + '>';
    var defenderTypes = getTypes();
    var i;
    html += '<option value=""selected>-</option>'
    for(i = 0; i < defenderTypes.length; i++) {
        html += "<option value='"+defenderTypes[i]+"'>"+defenderTypes[i]+"</option>";
    }
    html += '</select>';
    newDiv.innerHTML= html;
    document.getElementById(divname).appendChild(newDiv);
};

// Create Attacking Type catagory
function addAttackingType(divname, strength) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", strength);
    document.getElementById(divname).appendChild(newDiv);
};
