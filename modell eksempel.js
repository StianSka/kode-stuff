/*
For hver side:
    - Hvilke data må vi ha i modellen for å kunne tegne opp
      dette skjermbilde? Querry

    - Hva kan man gjøre i dette skjermbildet? 
      Hvordan skal det vises i modellen? Comand

    - Alle inputfelter på siden trenger et eget felt i modellen
*/

const model = {

    // tilstand app
    app:{
        currentPage: 'startPage',
        currentUser: 'Judas', 
    },

    // input felter til hver side
    inputs:{
        searchText: '',
        theme: 'dark',
    },

    // data
    main: [
        {
            title: 'title here',
            description: 'description here',
            logo: 'LOGO'
        }
    ]



}