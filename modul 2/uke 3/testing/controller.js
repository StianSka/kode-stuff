
function changeFirstLetter() {
    let storBoktav
    let restenAvOrdet
    for (let i = 0; i < model.filmer.length; i++){
        storBoktav = model.filmer[i].navn.charAt(0).toUpperCase()
        restenAvOrdet = model.filmer[i].navn.slice(1)
        model.filmer[i].navn = storBoktav + restenAvOrdet
    }
    show()
}