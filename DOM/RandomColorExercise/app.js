const header = document.querySelector('#header');
const button = document.querySelector('#button');
const body = document.querySelector('body');

function randomCol(){
let rcol = parseInt((Math.random()*255)+1);
let gcol = parseInt((Math.random()*255)+1);
let bcol = parseInt((Math.random()*255)+1);

header.innerText = `rgb(${rcol},${gcol},${bcol})`;
body.style.backgroundColor = `rgb(${rcol},${gcol},${bcol})`;
if (rcol+gcol+bcol <= 200){
    header.style.color = 'silver';
} else{
    header.style.color = 'black';
}
}


function randCol(){
let rcol = parseInt((Math.random()*255)+1);
let gcol = parseInt((Math.random()*255)+1);
let bcol = parseInt((Math.random()*255)+1);

return `rgb(${rcol},${gcol},${bcol})`;
}

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
const input = document.querySelector('input');

for (let button of buttons){
    button.addEventListener('click', randomize)
}

for (let h1 of h1s){
    h1.addEventListener('click', randomize)
}

function randomize(){
    this.style.backgroundColor = randCol();
    this.style.color = randCol();
}

input.addEventListener('keydown', function(){
    console.log('KEYDOWN');
})
input.addEventListener('keyup', function(q){
    console.log(`${q.key} + KEYUP`);
})


window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
    }
})
