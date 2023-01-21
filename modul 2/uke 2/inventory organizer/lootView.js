function uppdateLootView() {
    document.getElementById('app').innerHTML = //html
        `
            <h1>loot</h1>
            <div class="lootBox">${displayLootTable()}</div>
            <div class="leaveButton" >
            <button onclick="emptyLootRoll(),switchPage('stage')">leave</button>
            </div>
            
        `;
}

function displayLootTable() {                       //fix undefind when consumable is displayed
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