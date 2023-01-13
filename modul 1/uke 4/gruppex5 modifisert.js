// Variabler
let faceExpression = document.getElementById("face-expression")
let playText = document.getElementById("play-text")
let feedText = document.getElementById("feed-text")
let sleepText = document.getElementById('sleep-text');
let playStatus;
let feedStatus;
let sleepStatus;
let averageMood;
let isAlive = false;

// Intervaller
let playInterval;
let feedInterval;
let sleepInterval;

function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function play() {
    if (playStatus < 100 && isAlive == true) {
        playStatus++;
        playText.innerHTML = `${playStatus}%`;
    }
}

function feed() {
    if (feedStatus < 100 && isAlive == true) {
        feedStatus++;
        feedText.innerHTML = `${feedStatus}%`
    }
}

function sleep() {
    if (sleepStatus < 100 && isAlive == true) {
        sleepStatus++;
        sleepText.innerHTML = `${sleepStatus}%`;
    }
}


function reset() {
    if (isAlive == false){
    faceExpression.innerHTML ="Loading"
    playStatus = randomNumber(30, 80);
    sleepStatus = randomNumber(30, 80);
    feedStatus = randomNumber(30, 80);

    playInterval = setInterval(decreasePlay, 2000);
    feedInterval = setInterval(decreaseFeed, 2000);
    sleepInterval = setInterval(decreaseSleep, 2000);
    isAlive = true
    }
}

function decreasePlay() {
    playStatus--

    if (playStatus < 1) {
        playStatus = 0
    }
    console.log(playStatus)
    playText.innerHTML = `${playStatus}%`;
    setAverageMood();
}

function decreaseFeed() {
    feedStatus--

    if (feedStatus < 1) {
        feedStatus = 0
    }
    console.log(feedStatus)
    feedText.innerHTML = `${feedStatus}%`
    setAverageMood();
}

function decreaseSleep() {
    sleepStatus--

    if (sleepStatus < 1) {
        sleepStatus = 0
    }
    console.log(sleepStatus)
    sleepText.innerHTML = `${sleepStatus}%`;
    setAverageMood();
}

function setAverageMood() {
    averageMood = (playStatus + feedStatus + sleepStatus) / 3;
    console.log("AVERAGE" + averageMood)
    setFacialExpression();
}

function setFacialExpression() {
    if (averageMood < 100) {
        faceExpression.innerHTML = "😀"

    } if (averageMood < 50) {
        faceExpression.innerHTML = "😐"

    } if (averageMood < 25) {
        faceExpression.innerHTML = "😭"

    } if (averageMood < 10) {
        faceExpression.innerHTML = "👻"
        clearInterval(sleepInterval)
        clearInterval(feedInterval)
        clearInterval(playInterval)
        isAlive = false
    }
}








