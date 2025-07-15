const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const catname = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catname;

    list.append(newLI);
    input.value = "";

});


 

