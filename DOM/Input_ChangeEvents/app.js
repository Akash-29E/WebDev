const input = document.querySelector('#inp');
const input2 = document.querySelector('#inp2');
const h1 = document.querySelector('h1');

input.addEventListener('change',function(e){
console.log(input.value);
});

input2.addEventListener('input',function(e){
console.log(input2.value);
h1.innerText = input2.value;
});