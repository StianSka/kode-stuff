function updateViewMaterial() {
    let html = ``;
    html = //html
        `
    <div class = "material-container">
        ${listMainMaterials()}
    </div>
    `

    return html
}

function listMainMaterials() {
    let html = ``;
    for (let i = 0; i < model.data.materials.length; i++) {
        html += //html
            `  
            <div class ="sub-container">
                <h4>
                    ${model.data.materials[i].name}
                </h4>
                <h4>
                    ${model.data.materials[i].level}
                </h4>
                ${listMonsters(i)}
            </div>
        `;
    }
    return html
}

function listMonsters(index) {
    let html = ``;
    for (let i = 0; i < model.data.materials[index].monsters.length; i++) {
        monster = model.data.materials[index].monsters[i]
        html += //html
            `  
            <div>${model.data.materials[index].monsters[i].name}</div>
            <button onclick="InspectMonster(${model.data.materials[index].monsters[i].id})">show monster</button>
        `;
    }
    return html
}