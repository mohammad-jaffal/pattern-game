window.onload = function () {

const greenBox = document.getElementById('greenBox');
const redBox = document.getElementById('redBox');
const yellowBox = document.getElementById('yellowBox');
const blueBox = document.getElementById('blueBox');
const globalContainer = document.getElementById('globalContainer');
const mainText = document.getElementById('mainText');


var greenAudio = new Audio('./assets/sound-files/green.mp3');
var redAudio = new Audio('./assets/sound-files/red.mp3');
var yellowAudio = new Audio('./assets/sound-files/yellow.mp3');
var blueAudio = new Audio('./assets/sound-files/blue.mp3');
var wrongAudio = new Audio('./assets/sound-files/wrong.mp3');

var audioSounds = [wrongAudio, greenAudio, redAudio, yellowAudio, blueAudio]
var flickBoxes = [flickGlobal, flickGreen, flickRed, flickYellow, flickBlue]


var playing = false;
var lost = false;

// audio.play();

var maxLevel = 5;
var pattern = [];
var level = 0;
var count = 0;



// flick white green box
function flickGreen() {
    greenBox.style.backgroundColor = 'white';
    setTimeout(() => greenBox.style.backgroundColor = 'green', 100);
}
// flick white red box
function flickRed() {
    redBox.style.backgroundColor = 'white';
    setTimeout(() => redBox.style.backgroundColor = 'red', 100);
}
// flick white yellow box
function flickYellow() {
    yellowBox.style.backgroundColor = 'white';
    setTimeout(() => yellowBox.style.backgroundColor = 'yellow', 100);
}
// flick white blue box
function flickBlue() {
    blueBox.style.backgroundColor = 'white';
    setTimeout(() => blueBox.style.backgroundColor = 'blue', 100);
}
// flick red when lost 
function flickGlobal() {
    globalContainer.style.backgroundColor = 'red';
    setTimeout(() => globalContainer.style.backgroundColor = 'rgba(3,29,54,255)', 100);
}

// allow user to click on boxes 
function enableUI() {
    greenBox.style.pointerEvents = 'all';
    greenBox.style.cursor = 'pointer';

    redBox.style.pointerEvents = 'all';
    redBox.style.cursor = 'pointer';

    yellowBox.style.pointerEvents = 'all';
    yellowBox.style.cursor = 'pointer';

    blueBox.style.pointerEvents = 'all';
    blueBox.style.cursor = 'pointer';
}

// prevent user from clicking on boxes
function disableUI() {
    greenBox.style.pointerEvents = 'none';
    greenBox.style.cursor = 'default';

    redBox.style.pointerEvents = 'none';
    redBox.style.cursor = 'default';

    yellowBox.style.pointerEvents = 'none';
    yellowBox.style.cursor = 'default';

    blueBox.style.pointerEvents = 'none';
    blueBox.style.cursor = 'default';
}

// called when the game starts
function unlockGame() {
    console.log('playing');
    playing = true;
    lost = false;

    // fill the pattern array with random sequence
    for (var i = 0; i < maxLevel; i++) {
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }

    // enable boxes
    enableUI();

    mainText.innerHTML = `level ${level + 1}`;

    setTimeout(() => {
        flickBoxes[pattern[level]]();
        audioSounds[pattern[level]].play();
    }, 1000);
}


// add a new level when the pattern is correct
function addLevel() {
    count = 0;
    level++;
    setTimeout(() => mainText.innerHTML = `level is ${level + 1}`, 200);
    setTimeout(() => {
        mainText.innerHTML = `level is ${level + 1}`;
        flickBoxes[pattern[level]]();
        audioSounds[pattern[level]].play();
    }, 1000);
}


// check if the button clicked is in the right sequence
function checkPattern(x) {
    if (x == pattern[count]) {
        if (count == level) {
            // the player won
            if (count == maxLevel - 1) {
                console.log("CONGRATULATIONS !!!!!!!");
                return;
            }
            addLevel();
        }
        else
            count++;
    }
    else {
        // the player lost
        disableUI();
        setTimeout(() => {
            audioSounds[0].play();
            flickBoxes[0]();
        }, 100);
        console.log('game over');
        mainText.innerHTML = "Game Over, Press Any Key to Restart";
        lost = true;
    }
}






// called when user clicks to play or restart
document.addEventListener('keypress', async function onClick() {

    if (lost) {
        location.reload();
    }

    if (!playing) {
        unlockGame();
    }

});

// onclick event for green
greenBox.addEventListener('click', function onClick() {
    flickGreen();
    greenAudio.play();
    checkPattern(1);
});

// onclick event for red
redBox.addEventListener('click', function onClick() {
    flickRed();
    redAudio.play();
    checkPattern(2);
});

// onclick event for yellow
yellowBox.addEventListener('click', function onClick() {
    flickYellow();
    yellowAudio.play();
    checkPattern(3);
});

// onclick event for blue
blueBox.addEventListener('click', function onClick() {
    flickBlue();
    blueAudio.play();
    checkPattern(4);
});




}