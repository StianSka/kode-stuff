function movePiece(event, div) {
    let divId = div.id
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX, event.clientY);
    console.log(event.pageX, event.pageY);
    console.log(divId)
    let pieceHasMoved = false
    if (model.inputs.currentlyMowingPiece == '') {
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
            if (divId == model.allInPlayPieces[i].possison) {
                model.inputs.currentlyMowingPiece = model.allInPlayPieces[i]
                console.log('har kjørt')
                pieceHasMoved = true

            }
        }
    }
    if(model.inputs.currentlyMowingPiece != '' && pieceHasMoved == false) {
        model.inputs.currentlyMowingPiece.possison = divId
        for (let i = 0; i < model.allInPlayPieces.length; i++) {
           if(model.inputs.currentlyMowingPiece.id == model.allInPlayPieces[i].id ){
            model.allInPlayPieces[i].possison = model.inputs.currentlyMowingPiece.possison
            model.inputs.currentlyMowingPiece = ''
            updateView()
           }
            
        }

    }
}




