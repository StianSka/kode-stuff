function uppdateStageView() {
    let html = //html
    `
    <h1>Stage<br>
        HP:${model.app.currentHP}<br>
        Gold:${model.app.currentGold}
    </h1>
    <button onclick="goToStageLoot(1)">stage1</button>
    <button onclick="goToStageLoot(2)">stage2</button>
    <button onclick="goToStageLoot(3)">stage3</button>
    <button onclick="goToStageLoot(4)">stage4</button>
    <button onclick="switchPage('inv')">go to inventory</button>
    `;
    return html
}