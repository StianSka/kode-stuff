//notater:
//shiny odds 1/8192 
// ikke ferdig 

//model
    let partyShow = false ;                             //party open/close variable
    let party = ['quaa','quaa','i am a Reshiram'];      //party mons array 3 slots
    let inventory = [10,5,5];                           //poke ball inventory 0=pokeball 1=ultrabal 2=quickball
    let box1 = [];
    const pokeBallRAte = 10;                            //poke ball catch % increase
    const ultraBallRAte = 20;                           //ultra ball catch % increase
    const quickBallMaksRAte = 30;                       //first throw quick ball catch % increase
    const quickBallMinRAte = 5;                         //subseqent throw quick ball catch % increase
    let quickBallRAte = 30;                             //variab that is used in calcs for quick ball
    let inBattle;                                       //bool for in battel or not used for party stuff
    let monCR = 5;                                      //pokemons base catch % chanse
//view
battleScene()
    function menyScene(){
        inBattle = false
        partyShow = false
        document.getElementById('app').innerHTML = //html
        `
        <button onclick="startBattle()">encounter</button>
        <button onclick="displayParty()">party</button>
        <button onclick="">map</button>
        <div id="party"></div>
        <div id="map"></div>
        
        `;
    }

    function battleScene(){
        inBattle = true
        partyShow = false
        document.getElementById('app').innerHTML = //html
        `
        <div>pokemanz</div>
        <button onclick="catchMon(pokeBallRAte,'poke')">${inventory[0]} &nbsp; poke ball</button>
        <button onclick="catchMon(ultraBallRAte,'ultra')">${inventory[1]} &nbsp; ultra ball</button>
        <button onclick="catchMon(quickBallRAte,'quick')">${inventory[2]} &nbsp; quick ball</button>
        <button onclick="menyScene()">run</button>
        <button onclick="displayParty()">party</button>
        <div id="party"></div>
        `;
    }
//controller
    function startBattle(){
        quickBallRAte = quickBallMaksRAte;
        battleScene()
        //generate mon
    }

    function catchMon(ballrate,ballType){
       // sets catch roll 
        if(checkInventory(ballType)== true){
            let crRoll = Math.ceil(Math.random()* 100)
        // determend base cathc rate
                let crRate = monCR + ballrate
                if(crRoll < crRate){
                // add mon to box1/party
                finishidBattle()
                 }else{
                console.log('nay')
                battleScene()
                }
           }else{alert('you have no more of the selected balls')
            }
            quickBallRAte = quickBallMinRAte;   
    } 
    function checkInventory(ballType){
        if(ballType == 'poke' && inventory[0] > 0){
            inventory[0]--;
            return true
        } else if(ballType == 'ultra' && inventory[1] > 0){
            inventory[1]--;
            return true
        } else if(ballType == 'quick' && inventory[2] > 0){
            inventory[2]--;
            return true
        }else{
        return false
        }
    }
    function finishidBattle(){
        let tempRolls = [0,0,0];
        let lootPokeRolls = Math.ceil((Math.random()*3)+1)
        let lootUltraRolls = Math.ceil(Math.random()*3)
        let lootQuickRolls = Math.ceil(Math.random()*2)
        tempRolls[0] = rollLoot(lootPokeRolls)
        tempRolls[1] = rollLoot(lootUltraRolls)
        tempRolls[2] = rollLoot(lootQuickRolls)
        inventory[0] += tempRolls[0]
        inventory[1] += tempRolls[1]
        inventory[2] += tempRolls[2]
        alert('you got '+tempRolls[0]+' pokeballs, '+tempRolls[1]+' ultraballs and '+tempRolls[2]+' quickballs')
        menyScene()
    }
    function rollLoot(numRolls){
        let lootAmount = 0;
        while(numRolls>1){
            lootAmount = lootAmount + Math.ceil(Math.random()*5)
            numRolls--
        }
        
        return lootAmount
     }
    function displayParty(){
        if(partyShow == false && inBattle == true){
            document.getElementById('party').innerHTML = party[0]+
            `<button>switch</button><button>sumary</button><br>`+party[1]+
             `<button>switch</button><button>sumary</button><br>`+party[2]+
             `<button>switch</button><button>sumary</button>`
            partyShow = true
        }else if(partyShow == false && inBattle == false){
            document.getElementById('party').innerHTML = party[0]+
            `<button>sumary</button><br>`+party[1]+
            `<button>sumary</button><br>`+party[2]+
            `<button>sumary</button>`
            partyShow = true

        }else{
            document.getElementById('party').innerHTML = '';
            partyShow = false
        }
    }
    
   
   
