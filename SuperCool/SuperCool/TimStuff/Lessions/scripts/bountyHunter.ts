let weapons = [["Weapon", "Range", "Min Damage", "Max Damage", "Weight", "Attack Modifier", "Rate of Fire", "Cost"], ["Blaster Pistol", "Short", 1, 8, 5, 0, 2, 300], ["Blaster Rifle", "Medium", 1, 10, 8, 5, 2, 650], ["Blaster Sniper", "Long", 3, 18, 10, 10, 1, 1200], ["Vibro Blade", "Melee", 1, 6, 3, 0, 1, 50], ["Throwing Knife", "Short", 1, 4, 1, 0, 1, 25]];
let armor = [["Light", 10, 1, 50, 120], ["Medium", 25, 3, 100, 375], ["Heavy", 75, 5, 150, 1200]];
let items = [["To Be Determined - Item 1", 0], ["To Be Determined - Item 2", 0]];

let bountyHunter = new BountyHunter(null, null, null, null, null, null, null, null, null);
let weaponInventory = [];
let armorInventory = [];
let itemsInventory = [];
let equipedWeapon = [];

window.onload = () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();

    switch (page) {
        case "bhIndex.html":
            break;
        case "bhPurchaseItems.html":
            createBountyHunter();
            break;
        case "bhEquipGear.html":
            loadWeapons();
            break;
        default:
            break;
    }
}

function BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.combatOffense = combatOffense;
    this.combatDefense = combatDefense;
    this.luck = luck;
    this.gamble = gamble;
    this.hack = hack;
    this.health = health;
    this.equipWeapon = (weapon) => {
        this.equipWeapon = weapon;
    }
    this.equipArmor = (armor) => {
        this.equipArmor = armor;
    }

}

function Weapon(name, range, minDamage, maxDamage, weight, toHitModifier, rateOfFire, cost) {
    this.name = name;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.weight = weight;
    this.toHitModifier = toHitModifier;
    this.rateOfFire = rateOfFire;
    this.cost = cost;
}

function Armor(name, weight, damageReduction, durability, cost) {
    this.name = name;
    this.weight = weight;
    this.damageReduction = damageReduction;
    this.durability = durability;
    this.cost = cost;
}

function Items(name, weight, cost, description) {
    this.name = name;
    this.weight = weight;
    this.cost = cost;
    this.description = description;
}

let captureBountyHunterData = () => {
    let firstName = document.getElementById("firstName")["value"];
    let lastName = document.getElementById("lastName")["value"];
    let age = parseInt(document.getElementById("age")["value"]);
    let combatOffense = parseInt(document.getElementById("combatOffense")["value"]);
    let combatDefense = parseInt(document.getElementById("combatDefense")["value"]);
    let luck = parseInt(document.getElementById("luck")["value"]);
    let gamble = parseInt(document.getElementById("gamble")["value"]);
    let hack = parseInt(document.getElementById("hack")["value"]);
    let health = parseInt(document.getElementById("health")["value"]);

    let bountyHunter = new BountyHunter(firstName, lastName, age, combatOffense, combatDefense, luck, gamble, hack, health);

    sessionStorage.setItem("bountyHunter", JSON.stringify(bountyHunter));

    window.location.href = "bhPurchaseItems.html";
}

let createBountyHunter = () => {
    let bh = JSON.parse(sessionStorage.getItem("bountyHunter"));
    bountyHunter = new BountyHunter(bh.firstName, bh.lastName, bh.age, bh.combatOffense, bh.combatDefense, bh.luck, bh.gamble, bh.hack, bh.health);
    bountyHunter.firstName = bh.firstName;
    bountyHunter.lastName = bh.lastName;
    bountyHunter.age = bh.age;
    bountyHunter.combatOffense = bh.combatOffense;
    bountyHunter.combatDefense = bh.combatDefense;
    bountyHunter.luck = bh.luck;
    bountyHunter.gamble = bh.gamble;
    bountyHunter.hack = bh.hack;
    bountyHunter.health = bh.health;
}

//let testOnly = () => {
//    const helloWorld = true;
//    let someValue = JSON.parse(sessionStorage.getItem("bountyHunter"));
//}

let buyWeapon = (weapon) => {
    for (let i = 0; i <= weapons.length; i++) {
        for (let x = 0; x <= 7; x++) {
            if (weapons[i][x] === weapon) {
                let weaponCost = weapons[i][7].toString();
                let cost = parseInt(weaponCost);
                let money = parseInt(document.getElementById("money").innerHTML);

                if (money >= cost) {
                    money = money - cost;
                    document.getElementById("money").innerHTML = money.toString();
                    weaponInventory.push(weapon);
                    alert("Purchase successful");
                } else {
                    alert("Yo, get a contract Bounty Hunter!  Your money (lack there of) is not good here.");
                }
            }
        }
    }
}

let loadWeapons = () => {
    weaponInventory = JSON.parse(sessionStorage.getItem("weaponInventory"));

    let select = document.getElementById("weaponEquiped");

    for (let i = 0; i <= weaponInventory.length; i++) {
        if (weaponInventory[i] !== null) {
            let opt = weaponInventory[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
    }
}

let savePurchasedGear = () => {
    sessionStorage.setItem("weaponInventory", JSON.stringify(weaponInventory));
    window.location.href = "bhEquipGear.html";
}

let saveEquipedGear = () => {
    // weapons, armor, items.
    let ew = document.getElementById("weaponEquiped")["value"];

    sessionStorage.setItem("equipedWeapon", JSON.stringify(ew));
    window.location.href = "bhContract.html";
}


//let purchaseEquipment = () => {
//    let result = ["<table border=1>"];
//    let count = 0;
//    for (let row of weapons) {
//        result.push("<tr>");
//        for (let cell of row) {
//            if (count !== 0) {
//                result.push(`<td>${cell}</td>`);
//            } else {
//                result.push(`<td><strong>${cell}</strong></td>`);
//            }
//        }

//        result.push("</tr>");
//        count++;
//    }
//    result.push("</table>");

//    return document.getElementById("purchaseEquipment").innerHTML = result.join("\n");
//}

//function get_table(data) {
//    let result = ["<table border=1'>"];
//    for (let row of data) {
//        result.push("<tr>");
//        for (let cell of row) {
//            result.push(`<td>${cell}</td>`);
//        }
//        result.push("</tr>");
//    }
//    result.push("</table>");
//    return result.join('\n');
//}

//bountyHunter.equipWeapon(blasterPistol);
//bountyHunter.equipArmor(mandalorianPlate);


//let combatEngine = () => {
//    let hit = calcToHit();

//    if (hit) {
//        //calcDamage();
//    }
//}

// since we are going to be using numeric values a good practice would be to add a NaN check. (Not done below).
let adjustCharacterCreationPoints = () => {
    let totalCCP = totalCharacterCreationPointsSpent();     

    document.getElementById("pointsSpent").innerHTML = totalCCP.toString();

    if (totalCCP > 100) {
        alert("You have over spent.  Please adjust your point spend.");
    }
}

let totalCharacterCreationPointsSpent = () => {
    let ccp1 = parseInt(document.getElementById("combatOffense")["value"]);
    let ccp2 = parseInt(document.getElementById("combatDefense")["value"]);
    let ccp3 = parseInt(document.getElementById("luck")["value"]);
    let ccp4 = parseInt(document.getElementById("gamble")["value"]);
    let ccp5 = parseInt(document.getElementById("hack")["value"]);
    let ccp6 = parseInt(document.getElementById("health")["value"]);

    return ccp1 + ccp2 + ccp3 + ccp4 + ccp5 + ccp6;
}


let calcToHit = (attackerOffense, attackerLuck, defenderDefense, defenderLuck) => {
    let playerAdjustment = favorPlayer();
    let value = valueAdjustment();
    let result = 0;

    if (playerAdjustment) {
        result = (attackerOffense + attackerLuck) - (defenderDefense + defenderLuck) + value;
    }
    else {
        result = (attackerOffense + attackerLuck) - (defenderDefense + defenderLuck) - value;
    }

    if (result > 0) {
        return true;
    }

    return false;
}

let favorPlayer = () => {
    let favor = Math.floor((Math.random() * 2) + 1);
    let favorPlayer = false;

    if (favor === 2) {
        favorPlayer = true;
    }

    return favorPlayer;
}

var valueAdjustment = () => {
    return Math.floor((Math.random() * 25) + 1);
};





