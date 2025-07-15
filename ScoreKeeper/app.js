const mainDiv = document.querySelector('.container');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const p1btn = document.getElementById('p1btn');
const p2btn = document.getElementById('p2btn');
const reset = document.querySelector('#reset');
const announcement = document.querySelector('#announcement');
const playTo = document.querySelector('#playTo');
let i = 0;
let j = 0;
playTo.value = 5;

function resetFun() {
    i = 0;
    j = 0;
    announcement.innerText = ''
    p1btn.disabled = false;
    p2btn.disabled = false;
    // playTo.value = 5;
    p1score.classList.remove('has-text-success','has-text-danger');
    p2score.classList.remove('has-text-success','has-text-danger');
}

playTo.addEventListener('change',resetFun);

mainDiv.addEventListener('click', function (e) {
    e.preventDefault();

    // p1score = parseInt(document.querySelector('#p1score'));
    // p2score = parseInt(document.querySelector('#p2score'));

    if (e.target.id === 'p1btn') i = parseInt(p1score.innerText) + 1;
    else if (e.target.id === 'p2btn') j = parseInt(p2score.innerText) + 1;
    else if (e.target.id === 'reset') {
        // i = 0;
        // j = 0;
        // announcement.innerText = ''
        // p1btn.disabled = false;
        // p2btn.disabled = false;
        // playTo.value = 5;
        // p1score.style.color = 'black';
        // p2score.style.color = 'black';
        resetFun();
    }
    p1score.innerText = i;
    p2score.innerText = j;
    if (i == playTo.value) {
        announcement.innerText = 'P1 WINS!';
        p1btn.disabled = true;
        p2btn.disabled = true;
        p1score.classList.add('has-text-success');
        p2score.classList.add('has-text-danger');
    }
    else if (j == playTo.value) {
        announcement.innerText = 'P2 WINS!';
        p1btn.disabled = true;
        p2btn.disabled = true;
        p2score.classList.add('has-text-success');
        p1score.classList.add('has-text-danger');
    }



    console.log(`p1Score: ${p1score.innerText}, p2score: ${p2score.innerText}`);

});
