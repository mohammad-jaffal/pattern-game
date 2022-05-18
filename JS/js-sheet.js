const greenBox = document.getElementById('greenBox');
const redBox = document.getElementById('redBox');
const yellowBox = document.getElementById('yellowBox');
const blueBox = document.getElementById('blueBox');
const startButton = document.getElementById('start');
const restartButton = document.getElementById('restart');

var greenAudio = new Audio('./assets/sound-files/green.mp3');
var redAudio = new Audio('./assets/sound-files/red.mp3');
var yellowAudio = new Audio('./assets/sound-files/yellow.mp3');
var blueAudio = new Audio('./assets/sound-files/blue.mp3');
var wrongAudio = new Audio('./assets/sound-files/wrong.mp3');



var audioSounds = [wrongAudio, greenAudio, redAudio, yellowAudio, blueAudio]
var flickBoxes = [flickStart, flickGreen, flickRed, flickYellow, flickBlue]


// audio.play();

var maxLevel = 5;
var pattern = [];
var level = 0;
var count = 0;

// fill the pattern array with random sequence
for (var i = 0; i < maxLevel; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);

}


function flickGreen() {
    greenBox.style.backgroundColor = 'white';
    setTimeout(() => greenBox.style.backgroundColor = 'green', 100);
}
function flickRed() {
    redBox.style.backgroundColor = 'white';
    setTimeout(() => redBox.style.backgroundColor = 'red', 100);
}
function flickYellow() {
    yellowBox.style.backgroundColor = 'white';
    setTimeout(() => yellowBox.style.backgroundColor = 'yellow', 100);
}
function flickBlue() {
    blueBox.style.backgroundColor = 'white';
    setTimeout(() => blueBox.style.backgroundColor = 'blue', 100);
}

function flickStart() {
    startButton.style.backgroundColor = 'white';
    setTimeout(() => startButton.style.backgroundColor = 'rgb(0, 52, 70)', 100);
}

    



// onclick event for green
greenBox.addEventListener('click', function onClick() {
    console.log('green clicked');
    flickGreen();
    console.log(`count is ${count}`);
    checkPattern(1);
});


// onclick event for red
redBox.addEventListener('click', function onClick() {
    console.log('red clicked');
    flickRed();
    console.log(`count is ${count}`);
    checkPattern(2);
});

// onclick event for yellow
yellowBox.addEventListener('click', function onClick() {
    console.log('yellow clicked');
    flickYellow();
    console.log(`count is ${count}`);
    checkPattern(3);
});

// onclick event for blue
blueBox.addEventListener('click', function onClick() {
    console.log('blue clicked');
    flickBlue();
    console.log(`count is ${count}`);
    checkPattern(4);
});






// onclick event for the start button
startButton.addEventListener('click', function onClick() {
    console.log('started');
    flickBoxes[0]();

    // disable button
    startButton.style.pointerEvents = 'none';
    startButton.style.cursor = 'default';

    // enable boxes
    greenBox.style.pointerEvents = 'all';
    greenBox.style.cursor = 'pointer';

    redBox.style.pointerEvents = 'all';
    redBox.style.cursor = 'pointer';

    yellowBox.style.pointerEvents = 'all';
    yellowBox.style.cursor = 'pointer';

    blueBox.style.pointerEvents = 'all';
    blueBox.style.cursor = 'pointer';
    // pointer-events: none;

    console.log(`level is ${level}`);
    console.log(`THE BOX NOW IS ${pattern[level]}`);
    setTimeout(() => {
        flickBoxes[pattern[level]]();
        audioSounds[pattern[level]].play();
    }, 1000);
    
    
    

    



});

// add a new level when the pattern is correct
function addLevel() {
    count = 0;
    level++;
    console.log(`level is ${level}`);
    console.log(`THE BOX NOW IS ${pattern[level]}`);
    setTimeout(() => {
        flickBoxes[pattern[level]]();
        audioSounds[pattern[level]].play();
    }, 1000);
    


}

// check if the button clicked is in the right sequence
function checkPattern(x) {
    if (x == pattern[count]) {
        console.log("correct click");
        if (count == level) {
            if (count == maxLevel - 1) {
                console.log("CONGRATULATIONS !!!!!!!");
                return;
            }
            console.log("correct pattern");
            addLevel();
        }
        else
            count++;
    }
    else {
        
        setTimeout(() => audioSounds[0].play(), 100);
        console.log('game over');
        startButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }
}

// refreshes the page
function refreshPage() {
    window.location.reload();
} 