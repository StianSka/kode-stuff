function uppdateViewOptionPage() {
    document.getElementById('app').innerHTML = //html
        `
        <button onclick="goToVote()">go to vote</button>
        <hr/>
        current possible answers:
        <ul>
            ${createOptionsHtml()}
        </ul>
        add new answer: <br/>
        <input 
            type="text" 
            onchange="model.inputs.optionsPage.newOption=this.value"
            value="${model.inputs.optionsPage.newOption=this.value || ""}"
            />
        <button onclick="addOption()">add</button>
        `;
}

function createOptionsHtml() {
    let html = '';
    for (let i = 0; i < model.possibleAnswers.length; i++) {
        let answers = model.possibleAnswers[i];
        html += //html
            `
            <li>
                ${answers.text}
            </li>
            `
    }
    return html;
}