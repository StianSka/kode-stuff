function uppdateLootView() {
    createLoot()
    document.getElementById('app').innerHTML = //html
        `
            <h1>loot</h1>
            <div class="lootBox">${displayLootTable()}</div>
        `;
}

function displayLootTable() {
    let lootTabel = model.data.lootRoll
    let htmlLoot = ''
    for (let i = 0; i < lootTabel.length; i++) {
        htmlLoot += //html
            `
                <div class="lootPack">
                    ${lootTabel[i].name}<br>
                    ${lootTabel[i].material}<br>
                    <button onclick="claimLoot(${i})">claim</button>
                </div>
            `;
    }
    return htmlLoot
}