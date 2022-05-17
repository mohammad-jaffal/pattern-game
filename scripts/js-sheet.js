
const firstBox = document.getElementById('box-1')
const secondBox = document.getElementById('box-2')
const thirdBox = document.getElementById('box-3')
const fourthBox = document.getElementById('box-4')
const startButton = document.getElementById('start')
const restartButton = document.getElementById('restart')

var maxLevel = 5;
var pattern = [];
var level = 0;
var count = 0;

for (var i = 0; i < maxLevel; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);

}




firstBox.addEventListener('click', function onClick() {
    console.log('first clicked');
    firstBox.style.backgroundColor = 'white';
    setTimeout(() => firstBox.style.backgroundColor = 'yellow', 1);
    console.log(`count is ${count}`);
    checkPattern(1);
});

secondBox.addEventListener('click', function onClick() {
    console.log('second clicked');
    secondBox.style.backgroundColor = 'white';
    setTimeout(() => secondBox.style.backgroundColor = 'green', 1);
    console.log(`count is ${count}`);
    checkPattern(2);
});

thirdBox.addEventListener('click', function onClick() {
    console.log('third clicked');
    thirdBox.style.backgroundColor = 'white';
    setTimeout(() => thirdBox.style.backgroundColor = 'blue', 1);
    console.log(`count is ${count}`);
    checkPattern(3);
});

fourthBox.addEventListener('click', function onClick() {
    console.log('fourth clicked');
    fourthBox.style.backgroundColor = 'white';
    setTimeout(() => fourthBox.style.backgroundColor = 'red', 1);
    console.log(`count is ${count}`);
    checkPattern(4);
});


startButton.addEventListener('click', function onClick() {
    console.log('started');
    startButton.style.backgroundColor = 'white';
    setTimeout(() => startButton.style.backgroundColor = 'rgb(0, 52, 70)', 1);

    // disable button
    startButton.style.pointerEvents = 'none';
    startButton.style.cursor = 'default';

    // enable boxes
    firstBox.style.pointerEvents = 'all';
    firstBox.style.cursor = 'pointer';

    secondBox.style.pointerEvents = 'all';
    secondBox.style.cursor = 'pointer';

    thirdBox.style.pointerEvents = 'all';
    thirdBox.style.cursor = 'pointer';

    fourthBox.style.pointerEvents = 'all';
    fourthBox.style.cursor = 'pointer';
    // pointer-events: none;

    console.log(`level is ${level}`);
    console.log(`THE BOX NOW IS ${pattern[level]}`);

});


function addLevel() {
    count = 0;
    level++;
    console.log(`level is ${level}`);
    console.log(`THE BOX NOW IS ${pattern[level]}`);


}

function checkPattern(x) {
    // var count = 1;
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
        console.log('game over');
        startButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }
}


function refreshPage() {
    window.location.reload();
} 