function uppdateViewMain(){
    
    
    let html ='';
    //html = inputsHtml()
    html = findUser() 
    // for(let i = 0; i < model.produkts.length;i++){
    //     html += //html
    //     `
    //     <div>
    //     ${model.produdkts[i].producktName}
    //     ${model.produkts[i].pris}
    //     ${model.produkts[i].rating}
    //     </div>
    //     `;
    // }
    return html
}
function inputsHtml(){
let html = //html
    `
    <input type="text" onchange="model.producktName = this.value"/>
    <input type="number" onchange="model.pris = this.value"/>
    <button onclick="addItem()">legg til</button>
    `;
    return html
}
function findUser(){
    let html= ''
    for(let i = 0; i < model.data.users.length;i++){
        html += //html
        `
        <div>
        ${model.data.users[i].userName}
        ${model.data.users[i].userPoints}
        
        
        </div>
        `; 
}
return html
}