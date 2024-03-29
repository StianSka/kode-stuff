function movePiece(div) {
    let divId = div.id
    model.inputs.pieceIsPrimed = false
    primePieceToMove(divId)
    movePrimedPiece(divId)
    updateView()
}

function primePieceToMove(divId) {
    if (model.inputs.currentlyMovingPiece == '') {
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (divId == model.allInPlayPieces[i].possison
                && model.allInPlayPieces[i].color == model.colorToMove) {
                model.inputs.currentlyMovingPiece = model.allInPlayPieces[i]
                model.inputs.pieceIsPrimed = true
                for (let j = 0; j < model.board.length; j++) {
                    if (model.board[j].id == divId) {
                        model.board[j].color = '#5db549'
                        getPieceType()
                    }
                }
            }
        }
    }
}

function movePrimedPiece(divId) {
    if (model.inputs.currentlyMovingPiece != '' && model.inputs.pieceIsPrimed == false) {
        for (let i = 0; i < model.board.length; i++) {
            if (model.board[i].color == model.legalMoveSquareColor && model.board[i].id == divId) {
                for (let j = 0; j < model.allInPlayPieces.length; j++) {
                    if (model.allInPlayPieces[j].id == model.inputs.currentlyMovingPiece.id) {
                        for (let k = 0; k < model.board.length; k++) {
                            if( model.board[k].id == model.allInPlayPieces[j].possison){
                                model.board[k].currentPiece = ''
                                model.allInPlayPieces[j].hasMoved = true
                            } 
                        }
                        model.allInPlayPieces[j].possison = divId
                        model.board[i].currentPiece = model.allInPlayPieces[j].id
                        model.inputs.currentlyMovingPiece = ''
                        applyColors()
                    }
                }
            }
        }
        if (model.inputs.currentlyMovingPiece != '') {
            model.inputs.currentlyMovingPiece = ''
            applyColors()
        }
    }
}

function getPieceType() {
    let piece = model.inputs.currentlyMovingPiece.id
    if (piece.includes('pawn') == true) {
        pawnMove()
    }
    if (piece.includes('rook') == true) {
        rookMove()
    }
    if (piece.includes('horse') == true) {
        horseMove()
    }
    if (piece.includes('bishop') == true) {
        bishopMove()
    }
    if (piece.includes('queen') == true) {
        queenMove()
    }
    if (piece.includes('king') == true) {
        kingMove()
    }
}




