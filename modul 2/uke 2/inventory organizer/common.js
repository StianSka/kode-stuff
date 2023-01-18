function switchPage(location){      
    model.app.page = location;
    uppdateView()
}

function mathRandom(min, max) {
    let result = Math.round(Math.random() * (max - min) + min);
    return result;
}