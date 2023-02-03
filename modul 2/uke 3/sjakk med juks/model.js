const model = {
    //app
    curentPage: 'game',
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
            id: 'black king',
            possison: 'e8',
            isInCheck: false,
            imageLink: 'img/black king.png',
        },
        {
            id: 'black queen',
            possison: 'd8',
            imageLink: 'img/black queen.png',
        },
        {
            id: 'black bishop white',
            possison: 'c8',
            imageLink: 'img/black bishop.png',
        },
        {
            id: 'black bishop black',
            possison: 'f8',
            imageLink: 'img/black bishop.png',
        },
        {
            id: 'black horse',
            possison: 'b8',
            imageLink: 'img/black horse.png',
        },
        {
            id: 'black horse',
            possison: 'g8',
            imageLink: 'img/black horse.png',
        },
        {
            id: 'black rook',
            possison: 'a8',
            imageLink: 'img/black rook.png',
        },
        {
            id: 'black rook',
            possison: 'h8',
            imageLink: 'img/black rook.png',
        },
        {
            id: 'black pawn a',
            possison: 'a7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn b',
            possison: 'b7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn c',
            possison: 'c7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn d',
            possison: 'd7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn e',
            possison: 'e7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn f',
            possison: 'f7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn g',
            possison: 'g7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'black pawn h',
            possison: 'h7',
            hasMowed: false,
            imageLink: 'img/black pawn.png',
        },
        {
            id: 'white king',
            possison: 'e1',
            isInCheck: false,
            imageLink: 'img/white king.png',
        },
        {
            id: 'white queen',
            possison: 'd1',
            imageLink: 'img/white queen.png',
        },
        {
            id: 'white bishop black',
            possison: 'c1',
            imageLink: 'img/white bishop.png',
        },
        {
            id: 'white bishop white',
            possison: 'f1',
            imageLink: 'img/white bishop.png',
        },
        {
            id: 'white horse',
            possison: 'b1',
            imageLink: 'img/white horse.png',
        },
        {
            id: 'white horse',
            possison: 'g1',
            imageLink: 'img/white horse.png',
        },
        {
            id: 'white rook',
            possison: 'a1',
            imageLink: 'img/white rook.png',
        },
        {
            id: 'white rook',
            possison: 'h1',
            imageLink: 'img/white rook.png',
        },
        {
            id: 'white pawn a',
            possison: 'a2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn b',
            possison: 'b2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn c',
            possison: 'c2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn d',
            possison: 'd2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn e',
            possison: 'e2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn f',
            possison: 'f2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn g',
            possison: 'g2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },
        {
            id: 'white pawn h',
            possison: 'h2',
            hasMowed: false,
            imageLink: 'img/white pawn.png',
        },

    ],
    
}