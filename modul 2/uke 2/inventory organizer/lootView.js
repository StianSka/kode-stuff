function uppdateLootView(){
    document.getElementById('app').innerHTML = //html
    `
    <h1>loot</h1>
    <button onclick="switchPage('stage')">stage</button>
    <button onclick="switchPage('loot')">loot</button>
    <button onclick="switchPage('inv')">inventory</button>
    <button onclick="switchPage('inspect')">inspect</button>
    `;
}