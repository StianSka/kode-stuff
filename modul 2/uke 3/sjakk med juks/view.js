makeBoard()
updateView()
function updateView() {
    let html = ``;
    if (model.curentPage == 'game') { html = uppdateViewBoard() }
    document.getElementById('app').innerHTML = html
}

function uppdateViewBoard() {
    let html = //html
        `
        <div class="customeizeBar">${customeColorBar()}</div>
        <div class="boardContainer">
            <div class="board">${drawBoard()}</div>
        </div>
    `;
    return html
}

function drawBoard() {
    let html = ``
    for (let i = 0; i < model.board.length; i++) {
        html += /*HTML*/`
        <div id="${model.board[i].id}" onclick="movePiece(event,this)" class="chessSquare" style=" background-color: ${model.board[i].collor}">
        ${showPieces(i)}${showSquareId(i)}
        </div>
    `;
    }
    return html
}

function showPieces(index) {
    let html = ``
    for (let i = 0; i < model.allInPlayPieces.length; i++) {
        if(model.board[index].id ==  model.allInPlayPieces[i].possison ){
            html = `<img class="piece" src="${model.allInPlayPieces[i].imageLink}" ></img>`
        }
    }
    return html
}

function showSquareId(index) {
    let html = ``
    if (model.inputs.showSquareId == true) {
        html = model.board[index].id
        return html
    } else { return '' }
}

function customeColorBar() {
    let html = /*HTML*/`
    color dark &nbsp; <input type="color"onchange="model.inputs.blackColor=this.value" value="${model.inputs.blackColor}">
    &nbsp; color light &nbsp; <input type="color"onchange="model.inputs.whiteColor=this.value" value="${model.inputs.whiteColor}">
    &nbsp; &nbsp; <button onclick="applyColors()">Apply colors</button>
    &nbsp;  &nbsp; <button onclick="toogleSquareId()">toggle square id</button>
    
    `;
    return html
}