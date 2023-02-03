
function makeBoard() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let id = ''
    let color = ''
    let currentPiece = ''
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            id = letters[j] + (i + 1)
            model.board.push({ id: id, currentPiece: currentPiece, color: color })
        }
    }
    colorBoard()
}

function colorBoard(){
    colorBlackSquares(0)
    colorBlackSquares(16)
    colorBlackSquares(32)
    colorBlackSquares(48)
    colorWhiteSquares(8)
    colorWhiteSquares(24)
    colorWhiteSquares(40)
    colorWhiteSquares(56)
}

function colorBlackSquares(index) {
    for (let i = index; i < (index + 8); i = i + 2) {
        model.board[i].color = model.selectedColorBlack
        model.board[(i + 1)].color = model.selectedColorWhite
    }
}

function colorWhiteSquares(index) {
    for (let i = index; i < (index + 8); i = i + 2) {
        model.board[i].color = model.selectedColorWhite
        model.board[(i + 1)].color = model.selectedColorBlack
    }
}
