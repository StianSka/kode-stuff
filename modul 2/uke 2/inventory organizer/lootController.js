function createLoot() {
    let newName = model.data.lootName[mathRandom(0, 2)];
    let newMaterial = model.data.lootMaterial[mathRandom(0, 2)];
    let newId = model.data.lastGivenLootId + 1;
    model.data.lastGivenLootId = newId;
    model.data.lootRoll.push(new Loot(newId, newName, newMaterial));
}


function Loot(id, name, material) {
    this.id = id;
    this.name = name;
    this.material = material;

}