function uppdateStageView() {
    document.getElementById('app').innerHTML = //html
    `
    <h1>stage</h1>
    <button onclick="switchPage('loot')">stage1</button>
    <button onclick="">stage2</button>
    <button onclick="">stage3</button>
    <button onclick="">stage4</button>
    <button onclick="switchPage('inv')">go to inventory</button>
    `;
}