//notater:
//shiny odds 1/8192 
// ikke ferdig 

//model
    let partyShow = false ;                             //party open/close variable
    let party = ['quaa','quaa','i am a Reshiram'];      //party mon array 3 slots
    let inventory = [10,5,5];                           //poke ball inventory 0=pokeball 1=ultrabal 2=quickball
    let box1 = [];
    let box2 = [];
    const pokeBallRAte = 10;                            //poke ball catch % increase
    const ultraBallRAte = 20;                           //ultra ball catch % increase
    const quickBallMaksRAte = 30;                       //first throw quick ball catch % increase
    const quickBallMinRAte = 5;                         //subseqent throw quick ball catch % increase
    let quickBallRAte = 30;                                  //variab that is used in calcs for quick ball
    let monCR = 50;                                     //pokemons base catch % chanse
//view
    function show(){
        document.getElementById('app').innerHTML = //html
        `
        <button onclick="startBattle()">encounter</button>
        <button onclick="displayParty()">party</button>
        <div id="party"></div>
        <div>pokemanz</div>
        <button onclick="catchMon(pokeBallRAte,'poke')">${inventory[0]} &nbsp; poke ball</button>
        <button onclick="catchMon(ultraBallRAte,'ultra')">${inventory[1]} &nbsp; ualtra ball</button>
        <button onclick="catchMon(quickBallRAte,'quick')">${inventory[2]} &nbsp; quick ball</button>
        `;
    }
show()
//controller
    function startBattle(){
        quickBallRAte = quickBallMaksRAte;
        //generate mon
    }

    function catchMon(ballrate,ballType){
       // sets catch roll 
        if(checkInventory(ballType)== true){
            let crRoll = Math.ceil(Math.random()* 100)
        // determend base cathc rate
            let crRate = monCR + ballrate
            if(crRoll < crRate){
            console.log('yay')
            }else{
            console.log('nay')
            }
            quickBallRAte = quickBallMinRAte;
            }else{alert('you have no more of the selected balls')}
        show()
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
    function displayParty(){
        if(partyShow == false){
            document.getElementById('party').innerHTML = party[0]+`<br>`+party[1]+`<br>`+party[2]
            partyShow = true
        }else{
            document.getElementById('party').innerHTML = '';
            partyShow = false
        }
    }
   
