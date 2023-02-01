const model = {
    //app
    curentPage: 'game',
    //inputs
    inputs:
    {
        showSquareId: false,
        blackColor: '#800000',
        whiteColor: '#ffffff',
    },
    //data
    selectedColorBlack: '#800000',
    selectedColorWhite: 'ffffff',

    board: [],
    blackPpawns: [],
    blackKing:
    {
        id: 'black king',
        possison: 'e8',
        isInCheck: false,
    },
    whitePpawns: [
        {
            name: 'pawn',
            id: 'a pawn',
            possison: 'a2',
            firstMowe: true,
        },
    ]
}