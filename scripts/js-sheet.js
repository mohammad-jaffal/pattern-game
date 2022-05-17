
const firstBox = document.getElementById('box-1')
const secondBox = document.getElementById('box-2')
const thirdBox = document.getElementById('box-3')
const fourthBox = document.getElementById('box-4')
const startButton = document.getElementById('start')


var pattern = [];
var level = 1;
var count = 10;

for (var i = 0; i < 10; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);

}

firstBox.addEventListener('click', function onClick() {
    console.log('first clicked');
    firstBox.style.backgroundColor = 'white';
    setTimeout(() => firstBox.style.backgroundColor = 'yellow', 1);

    if (pattern[level] == 1)
        addLevel();
    else
        console.log('game over');
});

secondBox.addEventListener('click', function onClick() {
    console.log('second clicked');
    secondBox.style.backgroundColor = 'white';
    setTimeout(() => secondBox.style.backgroundColor = 'green', 1);

    if (pattern[level] == 2)
        addLevel();
    else
        console.log('game over');
});

thirdBox.addEventListener('click', function onClick() {
    console.log('third clicked');
    thirdBox.style.backgroundColor = 'white';
    setTimeout(() => thirdBox.style.backgroundColor = 'blue', 1);

    if (pattern[level] == 3)
        addLevel();
    else
        console.log('game over');
});

fourthBox.addEventListener('click', function onClick() {
    console.log('fourth clicked');
    fourthBox.style.backgroundColor = 'white';
    setTimeout(() => fourthBox.style.backgroundColor = 'red', 1);

    if (pattern[level] == 4)
        addLevel();
    else
        console.log('game over');
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

    console.log(pattern[level]);

});


function addLevel() {
    level++;
    console.log(pattern[level]);
    
}