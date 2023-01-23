function uppdateInspectView() {
    document.getElementById('app').innerHTML = //html
    `
    <h1>inspect</h1>
    <br><h1>${model.app.currentGold}</h1>
    <button onclick="switchPage('stage')">stage</button>
    <button onclick="switchPage('loot')">loot</button>
    <button onclick="switchPage('inv')">inventory</button>
    <button onclick="switchPage('inspect')">inspect</button>
    `;
}