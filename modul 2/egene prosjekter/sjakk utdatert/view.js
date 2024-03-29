makeBoard()
uppdateBoardPossison()
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
        <div class="whosTurn">${model.colorToMove} to move</div><br>
        <div class="boardContainer">
            <div class="board">${drawBoard()}</div>
        </div>
            <li>det som er igjen</li>
            <li>on pessant</li>
            <li>bonde promotion</li>
            <li>sjekk om konge er i sjakk</li>
            <li>konge moves </li>
            <li>capture </li>
            <li>tur bytte </li>
            <li>eventuelle jukse funksjoner</li>
            <li>noe mere farge greier disco?</li>
            <li>skrive om loops i horisontal og vertical moves</li>
    `;
    return html
}

function drawBoard() {
    let html = ``
    for (let i = 0; i < model.board.length; i++) {
        html += /*HTML*/`
        <div id="${model.board[i].id}" onclick="movePiece(this)" class="chessSquare" style=" background-color: ${model.board[i].color}">
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