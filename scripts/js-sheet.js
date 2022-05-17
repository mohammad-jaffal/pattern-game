
const firstBox = document.getElementById('box-1')
const secondBox = document.getElementById('box-2')
const thirdBox = document.getElementById('box-3')
const fourthBox = document.getElementById('box-4')
const startButton = document.getElementById('start')


var pattern = [];

var count = 10;

for (var i = 0; i < 10; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
}

firstBox.addEventListener('click', function onClick() {
    console.log('first clicked');
    firstBox.style.backgroundColor = 'white';
    setTimeout(() => firstBox.style.backgroundColor = 'yellow', 1);
});

secondBox.addEventListener('click', function onClick() {
    console.log('second clicked');
    secondBox.style.backgroundColor = 'white';
    setTimeout(() => secondBox.style.backgroundColor = 'green', 1);
});
thirdBox.addEventListener('click', function onClick() {
    console.log('third clicked');
    thirdBox.style.backgroundColor = 'white';
    setTimeout(() => thirdBox.style.backgroundColor = 'blue', 1);
});


fourthBox.addEventListener('click', function onClick() {
    console.log('fourth clicked');
    fourthBox.style.backgroundColor = 'white';
    setTimeout(() => fourthBox.style.backgroundColor = 'red', 1);
});

startButton.addEventListener('click', function onClick() {
    console.log('started');
    startButton.style.backgroundColor = 'white';
    setTimeout(() => startButton.style.backgroundColor = 'rgb(0, 52, 70)', 1);
    // disable button
    startButton.style.pointerEvents='none';
    // enable boxes
    firstBox.style.pointerEvents='all';
    secondBox.style.pointerEvents='all';
    thirdBox.style.pointerEvents='all';
    fourthBox.style.pointerEvents='all';
    // pointer-events: none;
});