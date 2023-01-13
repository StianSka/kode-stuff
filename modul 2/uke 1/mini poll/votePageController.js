function goToOptions(){
    model.app.currentPage = 'options';
    uppdateView();
}

function vote(index){
    let answer = model.possibleAnswers[index];
    if(!answer.voteCount){
        answer.voteCount = 0;
    }
    answer.voteCount++;
    uppdateView();
}