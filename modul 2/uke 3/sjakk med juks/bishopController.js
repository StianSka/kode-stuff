function bishopMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
// let letterIndex = model.arrayLeters.indexOf(currentPos.charAt(0))
// let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
    diagonalUpRight(currentPos, color,)
}

function diagonalUpRight(currentPos, color,) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let hasHitPiece = false
    for (let i = (boardPosIndex - 7); i >= 0; i = i - 7) {
        if (model.board[i].currentPiece == '' && hasHitPiece == false && model.board[i].id.charAt(0) != currentPos.charAt(0)) {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '' && hasHitPiece == false) {
            if (model.board[i].currentPiece.includes(color) == true) {
                hasHitPiece = true
            } else {
                model.board[i].color = model.legalMoveSquareColor
                hasHitPiece = true
            }
        }
    }
}