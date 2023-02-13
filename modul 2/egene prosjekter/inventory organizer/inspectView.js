function uppdateInspectView() {
    let html = //html
        `
    <h1>inspect<br>
    HP:${model.app.currentHP}<br>
    Gold:${model.app.currentGold}
    </h1>
    
    <button onclick="switchPage('inv')">go back</button>
    <div>${inspectSelectedItem()}</div>
    `;
    return html
}

function inspectSelectedItem() {
    let html = //html
        `
    <h1>
    name:${model.app.currentlyInspecting.name}<br>
    value:${model.app.currentlyInspecting.value}<br>
    material:${model.app.currentlyInspecting.material || ''}
    </h1>
    `;
    return html
}

