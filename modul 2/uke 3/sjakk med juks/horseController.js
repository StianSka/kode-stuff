function horseMove() {
    let currentPos = model.inputs.currentlyMovingPiece.possison
    let letter = currentPos.charAt(0)
    let number = currentPos.charAt(1)
    let letterIndex = 0
    let numberIndex = 0
    for (let i = 0; i < model.arrayLeters.length; i++) {
        if (letter == model.arrayLeters[i]) {
            letterIndex = i
            
        }
    }
    for (let i = 0; i < model.arrayNumbers.length; i++) {
        if (number == model.arrayNumbers[i]) {
            numberIndex = i
            
        }
    }
    for (let i = 0; i < model.board.length; i++) {
        if (model.board[i].id == (model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex+2)])){
            model.board[i].color = model.legalMoveSquareColor
            console.log((model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex+2)]))  
        }
    }
}
