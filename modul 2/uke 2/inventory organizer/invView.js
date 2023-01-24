function uppdateInvView() {
    document.getElementById('app').innerHTML = //html
        `
        <h1>Inventory<br>
            HP:${model.app.currentHP}<br>
            Gold:${model.app.currentGold}
        </h1>
    <button onclick="switchPage('stage')">go back to stages</button>
    <div class="inventory">${displayInv()}</div>
    `;
}
function displayInv() {
    let inv = model.data.inv
    let htmlInv = ''
    for (let i = 0; i < inv.length; i++) {
        htmlInv += //html
            `
            <div class="invSlot">
            ${inv[i].name}<br>
            ${inv[i].material || ''}<br>
            <button onclick="sellItem(${i})">${sellOrUse(i)}</button>
            <button onclick="">inspect</button>
            <button onclick="tossItem(${i})">toss</button>
            </div>
            `;
    }
    for (let i = inv.length; i < 18; i++) {
        htmlInv += //html
            `
            <div class="invSlot"></div>
            `;
    }

    return htmlInv
}

function sellOrUse(index){
    if(model.data.inv[index].name !='health potion'){
        return 'sell'
    }else {
        return 'use'
    }
}

