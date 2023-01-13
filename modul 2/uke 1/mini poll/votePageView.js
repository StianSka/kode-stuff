function uppdateViewVotePage() {
    document.getElementById('app').innerHTML = //html
        `
        <button onclick="goToOptions()">go to options</button>
        <hr/>
        <h3>${model.question}</h3>
        <ul>
        ${createVoteHtml()}
        </ul>
        `;
}

function createVoteHtml() {
    let html = '';
    for (let i = 0; i < model.possibleAnswers.length; i++) {
        let answers = model.possibleAnswers[i];
        html += //html
            `
            <li>
                <button onclick="vote(${i})">${answers.text}</button> - ${answers.voteCount}
            </li>
            `
    }
    return html;
}