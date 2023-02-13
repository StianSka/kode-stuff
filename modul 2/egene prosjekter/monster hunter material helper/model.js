const model = {
    // app
    app: {
        currentPage: 'material',
        monsterContent: 0,
    },
    //input
    input: {

    },
    //data
    data: {
        materials: [
            {
                name: 'Afflicted Pelt',
                level: '1-30',
                monsters: [
                    { name: 'Great Izuchi', id: 0, },
                    { name: 'Great Wroggi', id: 1, },
                    { name: 'Great Baggi', id: 2, },
                    { name: 'Kulu-Ya-Ku', id: 3, },
                ],
            },
            {
                name: 'Afflicted Hide+',
                level: '31-100',
                monsters: [
                    { name: 'Great Izuchi', id: 0, },
                    { name: 'Great Wroggi', id: 1, },
                    { name: 'Great Baggi', id: 2, },
                    { name: 'Kulu-Ya-Ku', id: 3, },
                ],
            },
            {
                name: 'Afflicted Thickhide',
                level: '101-200',
                monsters: [
                    { name: 'Great Izuchi', id: 0, },
                    { name: 'Great Wroggi', id: 1, },
                    { name: 'Great Baggi', id: 2, },
                    { name: 'Kulu-Ya-Ku', id: 3, },
                ],
            },
            {
                name: 'Afflicted Bone',
                level: '1-30',
                monsters: [
                    { name: 'Arzuros', id: 4, },
                    { name: 'Lagombi', id: 5, },
                    { name: 'Volvidon', id: 6, },
                ],
            },
            {
                name: 'Afflicted Hardbone',
                level: '31-100',
                monsters: [
                    { name: 'Arzuros', id: 4, },
                    { name: 'Lagombi', id: 5, },
                    { name: 'Volvidon', id: 6, },
                ],
            },
            {
                name: 'Afflicted Slogbone',
                level: '101-200',
                monsters: [
                    { name: 'Arzuros', id: 4, },
                    { name: 'Lagombi', id: 5, },
                    { name: 'Volvidon', id: 6, },
                ],
            },
            {
                name: 'Afflicted Monster Bone',
                level: '11-30',
                monsters: [
                    { name: 'Aknosom', id: 7, },
                    { name: 'Royal Ludroth', id: 8, },
                    { name: 'Basarios', id: 9, },
                    { name: 'Barroth', id: 10, },
                ],
            },
            {
                name: 'Afflicted Monster Hardbone',
                level: '31-100',
                monsters: [
                    { name: 'Aknosom', id: 7, },
                    { name: 'Royal Ludroth', id: 8, },
                    { name: 'Basarios', id: 9, },
                    { name: 'Barroth', id: 10, },
                ],
            },
            {
                name: 'Afflicted Monster Slogbone',
                level: '101.200',
                monsters: [
                    { name: 'Aknosom', id: 7, },
                    { name: 'Royal Ludroth', id: 8, },
                    { name: 'Basarios', id: 9, },
                    { name: 'Barroth', id: 10, },
                ],
            },
        ],
        /*
            'Anti-Wyvern Jewel 2'
            'Anti-Aerial Jewel 2'
            'Anti-Aquatic Jewel 2'
            'Fanged Exploit Jewel 2'
        */
        monsters: [
            {
                id: 0,
                name: 'Great Izuchi',
                aRank: 1,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Thunder & Water',
                poison: 3,
                blast: 2,
            },
            {
                id: 1,
                name: 'Great Wroggi',
                aRank: 1,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Ice & Water',
                poison: 0,
                blast: 2,
            },
            {
                id: 2,
                name: 'Great Baggi',
                aRank: 1,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Fire & Water-Thunder',
                poison: 1,
                blast: 3,
            },
            {
                id: 3,
                name: 'Kulu-Ya-Ku',
                aRank: 1,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Water & Everything Else',
                poison: 1,
                blast: 2,
            },
            {
                id: 4,
                name: 'Arzuros',
                aRank: 1,
                antiDeco: 'Fanged Exploit Jewel 2',
                elementWeaknes: 'Fire & Ice',
                poison: 3,
                blast: 2,
            },
            {
                id: 5,
                name: 'Lagombi',
                aRank: 1,
                antiDeco: 'Fanged Exploit Jewel 2',
                elementWeaknes: 'Fire & Thunder',
                poison: 3,
                blast: 3,
            },
            {
                id: 6,
                name: 'Volvidon',
                aRank: 1,
                antiDeco: 'Fanged Exploit Jewel 2',
                elementWeaknes: 'Water & Ice',
                poison: 1,
                blast: 2,
            },
            {
                id: 7,
                name: 'Aknosom',
                aRank: 2,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Water & Thunder',
                poison: 1,
                blast: 2,
            },
            {
                id: 8,
                name: 'Royal Ludroth',
                aRank: 2,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Fire & Thunder',
                poison: 1,
                blast: 2,
            },
            {
                id: 9,
                name: 'Basarios',
                aRank: 2,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Dragon & Water',
                poison: 1,
                blast: 2,
            },
            {
                id: 10,
                name: 'Barroth',
                aRank: 2,
                antiDeco: 'Anti-Wyvern Jewel 2',
                elementWeaknes: 'Fire & Ice',
                poison: 3,
                blast: 3,
            },
        ],
    },
}  
/*
                   

    'Anti-Wyvern Jewel 2'
    'Anti-Aerial Jewel 2'
    'Anti-Aquatic Jewel 2'
    'Fanged Exploit Jewel 2'
         

                    
















































*/