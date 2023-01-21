function tossItem(index){
    model.data.inv.splice(index,1)
    uppdateView()
}