function tossItem(index){
    model.data.inv.splice(index,1)
    uppdateView()
}
function sellItem(index){
    model.app.currentGold = model.app.currentGold+ model.data.inv[index].value
    model.data.inv.splice(index,1)
    uppdateView()
}