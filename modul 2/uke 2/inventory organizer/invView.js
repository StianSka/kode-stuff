function uppdateInvView() {
    document.getElementById('app').innerHTML = //html
        `
    <h1>inventory</h1>
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
            ${inv[i].material}<br>
            <button onclick="">toss</button>
            <button onclick="">inspect</button>
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

