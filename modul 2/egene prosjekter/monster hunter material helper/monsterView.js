function updateViewMonster() {
    let html = ``;
    html = `<div class="monster-container">${displayMonster()}</div>`;
    return html
}

function displayMonster() {
    let index = model.app.monsterContent
    let html = //html
        `
    <button onclick="switchPage('material')" class="close-monster-view">Go Back</button>
    <h1>${model.data.monsters[index].name}</h1>
    <div>Anomaly Level: ${model.data.monsters[index].aRank}</div>
    <div>Anti Speeches:  ${model.data.monsters[index].antiDeco}</div>
    <div>Elemental Weaknesses :  ${model.data.monsters[index].elementWeaknes}</div>
    <div>Poison Effectiveness:  ${model.data.monsters[index].poison} Stars</div>
    <div>Blast Effectiveness:  ${model.data.monsters[index].blast} Stars</div>
    `;
    return html
}
