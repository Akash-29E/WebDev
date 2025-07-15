const btn = document.querySelector('#v2');

btn.onclick = function (){
    console.log('HOPE IT WORKED!')
}

function scream(){
    console.log('AAAAAAAAA');
    console.log('STOP TOUCHING ME!!');

}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED');
})
