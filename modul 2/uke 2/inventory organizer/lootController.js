function createLoot() {
    let newId = model.data.lastGivenLootId + 1;
    let newLootName = model.data.lootName
    let newLootMaterial = model.data.lootMaterial
    for (let i = 0; i < model.data.amountOfRools; i++) {
        let newName = newLootName[mathRandom(0, (newLootName.length-1))];
        let newMaterial = newLootMaterial[mathRandom(0, (newLootMaterial.length-1))];
        model.data.lastGivenLootId = newId;
        model.data.lootRoll.push(new Loot(newId, newName, newMaterial));
        newId++
    }
}

function claimLoot(index){
    model.data.inv.push(model.data.lootRoll[index])
    model.data.lootRoll.length = 0
    switchPage('stage')
}


function Loot(id, name, material) {
    this.id = id;
    this.name = name;
    this.material = material;

}