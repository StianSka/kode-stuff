function InspectMonster(monsterName) {
        model.app.monsterContent = monsterName
    switchPage('monster')
}

function switchPage(location) {
    model.app.currentPage = location
    updateView()
}