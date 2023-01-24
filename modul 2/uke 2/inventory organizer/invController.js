function tossItem(index){
    model.data.inv.splice(index,1)
    uppdateView()
}
function sellItem(index){
    if(model.data.inv[index].name !='health potion'){
        model.app.currentGold = model.app.currentGold+ model.data.inv[index].value
        model.data.inv.splice(index,1)
        uppdateView()
    }else {
        model.app.currentHP = model.app.currentHP + model.data.inv[index].value
        model.data.inv.splice(index,1)
        uppdateView()
    }
}

