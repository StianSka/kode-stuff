function goToStageLoot(stage) {
    createLoot(stage)
    switchPage('loot')
}

function createLoot(stage) {
    for (let i = 0; i < model.data.amountOfRools; i++) {
        let lootType = model.data.lootType[mathRandom(0, (model.data.lootType.length - 1))]
        if (lootType == 'consumable') {
            makeConsumable(stage)
        } else {
            makeArtifact(stage)
        }
    }
}
function makeConsumable(stage) {
    let newValue = 0;
    let newId = model.data.lastGivenLootId + 1;
    model.data.lastGivenLootId = newId;
    let newLootNameconsumable = model.data.lootNameConsumable[mathRandom(0, (model.data.lootNameConsumable.length - 1))]
    if (newLootNameconsumable == 'health potion') {
        newValue = mathRandom(10, 30);
    } else {
        newValue = (mathRandom(50, 100)) * stage;
    }
    model.data.lootRoll.push(new Consumable(newId, newLootNameconsumable, newValue))
    newId++
}

function makeArtifact(stage){
    let newValue = 0;
    let newId = model.data.lastGivenLootId + 1;
    model.data.lastGivenLootId = newId;
    let newLootNameArtifact = model.data.lootNameArtifact[mathRandom(0,(model.data.lootNameArtifact.length-1))];
    let newLootMaterial = model.data.lootMaterial[mathRandom(0,(model.data.lootMaterial.length-1))];
    if (newLootMaterial == 'iron') {
        newValue = (mathRandom(50, 100)) * stage;
    }
    if (newLootMaterial == 'silver') {
        newValue = (mathRandom(85, 125)) * stage;
    }
    if (newLootMaterial == 'gold') {
        newValue = (mathRandom(150, 175)) * stage;
    }
    model.data.lootRoll.push(new Loot(newId, newLootNameArtifact, newLootMaterial,newValue));
     newId++ 
}

function claimLoot(index) {
    if (model.data.inv.length == 18) {
        alert("inventroy is full")
        return
    }

    model.data.inv.push(model.data.lootRoll[index])
    emptyLootRoll()
    switchPage('stage')
}

function emptyLootRoll() {
    model.data.lootRoll.length = 0
}

function Consumable(id, name, value) {
    this.id = id;
    this.name = name;
    this.value = value
}

function Loot(id, name, material, value) {
    this.id = id;
    this.name = name;
    this.material = material;
    this.value = value
}