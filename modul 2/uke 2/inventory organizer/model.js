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
  app: {
    page: 'stage',
  },

  // input felter til hver side
  inputs: {

  },

  // data
  data: {
    amountOfRools: 20,
    lootRoll: [],
    lootName: ['axe', 'sword', 'staff'],
    lootMaterial: ['metal', 'wood', 'stone'],
    lastGivenLootId: 0,

    inv: [
      { id: 0, name: "placeholder", type: "placeholder" },
    ],
  }



};