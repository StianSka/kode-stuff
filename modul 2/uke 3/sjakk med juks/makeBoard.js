
function makeBoard() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let id = ''
    let collor = ''
    let currentPiece = ''
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            id = letters[j] + (i + 1)
            model.board.push({ id: id, currentPiece: currentPiece, collor: collor })
        }
    }
    colorBoard()
}

function colorBoard(){
    collorBlackSquares(0)
    collorBlackSquares(16)
    collorBlackSquares(32)
    collorBlackSquares(48)
    collorWhiteSquares(8)
    collorWhiteSquares(24)
    collorWhiteSquares(40)
    collorWhiteSquares(56)
}

function collorBlackSquares(index) {
    for (let i = index; i < (index + 8); i = i + 2) {
        model.board[i].collor = model.selectedColorBlack
        model.board[(i + 1)].collor = model.selectedColorWhite
    }
}

function collorWhiteSquares(index) {
    for (let i = index; i < (index + 8); i = i + 2) {
        model.board[i].collor = model.selectedColorWhite
        model.board[(i + 1)].collor = model.selectedColorBlack
    }
}
