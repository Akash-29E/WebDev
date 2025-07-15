function singSong() {
    console.log('Hi');
    console.log('Hi');
    console.log('Hi');
}

function greetMe(firstname) {
    console.log(`Welcome ${firstname.toString()}, We are happy to see you!`);
}

function repeat(str, numTmes) {
    result = '';
    for (let i = 0; i < numTmes; i++) {
        result += str;
    }
    console.log(result);
}

function callTwice(func) {
    func();
    func();
}

function TypeLaugh() {
    console.log('BWAHAHAHAHA!!');
}

function Mysteryfunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('I AM A GOOD FUNCTION!');
            console.log('YOU WIN!');
        }
    }
    else {
        return function () {
            alert('OH NO! BAD FUNCTION!');
            alert("DON'T YOU DARE CLOSE THIS WINDOW");
            alert("DON'T YOU DARE CLOSE THIS WINDOW");
            alert("DON'T YOU DARE CLOSE THIS WINDOW");
        }
    }
}


function checkBetween(min,max){
    return function (num){
        console.log(num>= min && num<= max);
    }
}