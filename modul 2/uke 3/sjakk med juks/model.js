const model = {
    //app
    curentPage: 'game',
    colorToMove: 'white',

    //inputs
    inputs:
    {
        showSquareId: false,
        blackColor: '#800000',
        whiteColor: '#ffffff',
        currentlyMowingPiece:'',
    },
    //data
    selectedColorBlack: '#800000',
    selectedColorWhite: 'ffffff',

    board: [],
    allInPlayPieces: [
        {
            id: 'black king e',
            possison: 'e8',
            color:'black',
            isInCheck: false,
            imageLink: 'img/black king.png',
        },
        {
            id: 'black queen d',
            possison: 'd8',
            color:'black',
            imageLink: 'img/black queen.png',
        },
        {
            id: 'black bishop white c',
            possison: 'c8',
            color:'black',
            imageLink: 'img/black bishop.png',
        },
        {
            id: 'black bishop black f',
            possison: 'f8',
            color:'black',
            imageLink: 'img/black bishop.png',
        },
        {
            id: 'black horse b',
            possison: 'b8',
            color:'black',
            imageLink: 'img/black horse.png',
        },
        {
            id: 'black horse g',
            possison: 'g8',
            color:'black',
            imageLink: 'img/black horse.png',
        },
        {
            id: 'black rook a',
            possison: 'a8',
            color:'black',
            imageLink: 'img/black rook.png',
        },
        {
            id: 'black rook h',
            possison: 'h8',
            color:'black',
            imageLink: 'img/black rook.png',
        },
        {
            id: 'black pawn a',
            possison: 'a7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn b',
            possison: 'b7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn c',
            possison: 'c7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn d',
            possison: 'd7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn e',
            possison: 'e7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn f',
            possison: 'f7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn g',
            possison: 'g7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn h',
            possison: 'h7',
            color:'black',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'white king e',
            possison: 'e1',
            color:'white',
            isInCheck: false,
            imageLink: 'img/white king.png',
        },
        {
            id: 'white queen d',
            possison: 'd1',
            color:'white',
            imageLink: 'img/white queen.png',
        },
        {
            id: 'white bishop black c',
            possison: 'c1',
            color:'white',
            imageLink: 'img/white bishop.png',
        },
        {
            id: 'white bishop white f',
            possison: 'f1',
            color:'white',
            imageLink: 'img/white bishop.png',
        },
        {
            id: 'white horse b',
            possison: 'b1',
            color:'white',
            imageLink: 'img/white horse.png',
        },
        {
            id: 'white horse g',
            possison: 'g1',
            color:'white',
            imageLink: 'img/white horse.png',
        },
        {
            id: 'white rook a',
            possison: 'a1',
            color:'white',
            imageLink: 'img/white rook.png',
        },
        {
            id: 'white rook h',
            possison: 'h1',
            color:'white',
            imageLink: 'img/white rook.png',
        },
        {
            id: 'white pawn a',
            possison: 'a2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn b',
            possison: 'b2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn c',
            possison: 'c2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn d',
            possison: 'd2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn e',
            possison: 'e2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn f',
            possison: 'f2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn g',
            possison: 'g2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn h',
            possison: 'h2',
            color:'white',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },

    ],
    
}