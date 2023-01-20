function uppdateLootView() {
    createLoot()
    document.getElementById('app').innerHTML = //html
        `
            <h1>loot</h1>
            <div>${displayLootTable()}</div>
        `;
}

function displayLootTable() {
    let lootTabel = model.data.lootRoll
    let htmlLoot = ''
    for (let i = 0; i < lootTabel.length; i++) {
        htmlLoot += //html
            `
                <div>
                    ${lootTabel[i].name}
                    ${lootTabel[i].material}
                    <button onclick="">claim</button>
                </div>
            `;
    }

    return htmlLoot

}