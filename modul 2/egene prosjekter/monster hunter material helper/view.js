updateView()
function updateView() {
    let html = ``;
    if (model.app.currentPage == 'material') {
        html = updateViewMaterial()
    }
    if (model.app.currentPage == 'monster') {
        html = updateViewMonster()
    }
    document.getElementById('app').innerHTML = html
}

