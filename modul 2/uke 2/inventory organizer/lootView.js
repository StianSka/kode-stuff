function uppdateLootView() {
    document.getElementById('app').innerHTML = //html
        `
    <h1>loot</h1>
    <button onclick="createLoot()">make loot</button>
    <button onclick="findLoot()">show loot</button>
    


    `;
}

function findLoot() {
    let lootTabel = model.data.lootRoll
    for (let i = 0; i < lootTabel.length; i++){
        console.log(model.data.lootRoll[i].name)
    }
}




{/* <button onclick="switchPage('stage')">stage</button>
    <button onclick="switchPage('loot')">loot</button>
    <button onclick="switchPage('inv')">inventory</button>
    <button onclick="switchPage('inspect')">inspect</button> */}