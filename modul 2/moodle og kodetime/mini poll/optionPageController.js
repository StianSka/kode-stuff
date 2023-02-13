function goToVote() {
    model.app.currentPage = 'vote';
    uppdateView();
}

function addOption() {
    model.possibleAnswers.push({
        text: model.inputs.optionsPage.newOption,
        voteCount: 0
    });
    model.inputs.optionsPage.newOption = "";
    uppdateView();
}