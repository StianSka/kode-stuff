function movePiece(div) {
    let divId = div.id
    let pieceIsPrimed = false
    if (model.inputs.currentlyMowingPiece == '') {
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (divId == model.allInPlayPieces[i].possison
                && model.allInPlayPieces[i].color == model.colorToMove) {
                model.inputs.currentlyMowingPiece = model.allInPlayPieces[i]
                pieceIsPrimed = true
                for (let j = 0; j < model.board.length; j++) {
                    if (model.board[j].id == divId) {
                        model.board[j].color = '#5db549'
                        getPieceType()
                    }
                }
            }
        }
    }
    if (model.inputs.currentlyMowingPiece != '' && pieceIsPrimed == false) {
        getPieceType()

        applyColors()
        console.log('kjørt')
    }
    updateView()
}

function getPieceType() {
    let piece = model.inputs.currentlyMowingPiece.id
    if (piece.includes('horse') == true) {
        horseMove()
    }
}

function horseMove() {
    let currentPos = model.inputs.currentlyMowingPiece.possison
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
            model.board[i].color = '#5db549'
            console.log((model.arrayLeters[(letterIndex + 1)] + model.arrayNumbers[(numberIndex+2)]))
           
        }
        
    }
}





