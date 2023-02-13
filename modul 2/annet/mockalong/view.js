function updateView() {
    let html = //html
        `
    <div>${listFilmer()}</div>
    <button onclick="changeFirstLetter()">dass</button>
    `;
    return html
}

function listFilmer() {
    let html = ''
    for (let i = 0; i < model.filmer.length; i++) {
        html += //html
        `
        <li>${model.filmer[i].navn}</li>
        `;
    }
    return html
}

