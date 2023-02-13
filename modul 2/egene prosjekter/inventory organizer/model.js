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
    currentGold: 0,
    currentHP: 100,
    currentlyInspecting: 
    {
      id: '',
      material: '',
      name: '',
      value: '',
    },
  },

  // input felter til hver side
  inputs: {

  },

  // data
  data: {
    amountOfRools: 5,
    lootRoll: [],
    lootType: ['consumable', 'artifact'],
    lootNameConsumable: ['health potion', 'bag of coins'],
    lootNameArtifact: ['ring', 'amulet', 'coin', 'crown'],
    lootMaterial: ['iron', 'silver', 'gold'],
    lastGivenLootId: 0,

    inv: [],
  }



};