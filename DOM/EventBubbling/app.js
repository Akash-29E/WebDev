const myDiv = document.querySelector('#container');
const myBtn = document.querySelector('#colorButton');


const RandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

myBtn.addEventListener('click', function(e){
    myDiv.style.backgroundColor = RandomColor();
})

myDiv.addEventListener('click', function(){
    myDiv.classList.toggle('hide');
})