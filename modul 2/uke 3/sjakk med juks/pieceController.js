function movePiece(event, div) {
    let divId = div.id
    let pieceHasMoved = false
    if (model.inputs.currentlyMowingPiece == '') {
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (divId == model.allInPlayPieces[i].possison) {
                model.inputs.currentlyMowingPiece = model.allInPlayPieces[i]
                for (let j = 0; j < model.board.length; j++) {
                    if(model.inputs.currentlyMowingPiece.possison == model.board[j].id){
                        model.board[j].color = '#5db549'
                    }
                }
                console.log('har kjørt')
                pieceHasMoved = true
            }
        }
    }

    if (model.inputs.currentlyMowingPiece != '' && pieceHasMoved == false) {
        model.inputs.currentlyMowingPiece.possison = divId
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (model.inputs.currentlyMowingPiece.id == model.allInPlayPieces[i].id) {
                model.allInPlayPieces[i].possison = model.inputs.currentlyMowingPiece.possison
                model.inputs.currentlyMowingPiece = ''
                applyColors()
            }
        }
    }
    updateView()
}





