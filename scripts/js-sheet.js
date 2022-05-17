const firstBox = document.getElementById('box-1')
const secondBox = document.getElementById('box-2')
const thirdBox = document.getElementById('box-3')
const fourthBox = document.getElementById('box-4')


var pattern = [];

var count = 10;

for(var i=0 ; i<10 ; i++){
    pattern.push(Math.floor(Math.random() * 4) + 1);
}

firstBox.addEventListener('click', function onClick() {
    console.log('first clicked');
    firstBox.style.backgroundColor = 'white';
  });

// firstBox.onclick = function() {
//     console.log('first clicked');
//     document.firstBox.style.color = 'salmon';
    
//     // 👇️ optionally change text color
//     // document.body.style.color = 'white';
//   }