function queenMove() {
    let color = model.inputs.currentlyMovingPiece.color
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let letterIndex = model.arrayLeters.indexOf(currentPos.charAt(0))
    let numberIndex = model.arrayNumbers.indexOf(currentPos.charAt(1))
    queenMoveRight(letterIndex, numberIndex, currentPos, color)
    queenMoveLeft(letterIndex, numberIndex, currentPos, color)
}

function findCurrentPosisonIndex(currentPos) {
    let index = 0
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == currentPos) {
            index = i
        }
    }
    return index
}

function queenMoveRight(letterIndex, numberIndex, currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let endOfRow = boardPosIndex + ((model.arrayNumbers.length - 1) - numberIndex)
    let lastCalcSquare = boardPosIndex
    for (let i = (boardPosIndex + 1); i < model.board.length; i++) {
        lastCalcSquare++
        if (model.board[i].currentPiece == '') {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '') { break }
        if (i == endOfRow) { break }
    }
    if (model.board[lastCalcSquare].currentPiece.includes(color) == false && lastCalcSquare <= endOfRow) {
        model.board[lastCalcSquare].color = model.legalMoveSquareColor
    }
}

function queenMoveLeft(letterIndex, numberIndex, currentPos, color) {
    let boardPosIndex = findCurrentPosisonIndex(currentPos)
    let endOfRow = boardPosIndex - numberIndex
    let lastCalcSquare = boardPosIndex
    for (let i = (boardPosIndex - 1); i < model.board.length; i--) {
        lastCalcSquare--
        if (model.board[i].currentPiece == '') {
            model.board[i].color = model.legalMoveSquareColor
        }
        if (model.board[i].currentPiece != '') { break }
        if (i == endOfRow) { break }
    }
    if (model.board[lastCalcSquare].currentPiece.includes(color) == false && lastCalcSquare >= endOfRow) {
        model.board[lastCalcSquare].color = model.legalMoveSquareColor
    }
}


