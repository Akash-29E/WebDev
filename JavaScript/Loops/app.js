
// const animals = ['bear', 'elephant', 'dog', 'cat', 'shark', 'terry'];

// for (let i=0; i < animals.length; i++){
//     console.log(i,animals[i]);
// }

// let i=0;
// while (i < 10){
//     console.log(i++);
// }
// const secret = "FlyingLion";
// i = prompt("Enter the secret code:");
// while (i!=secret){
//     i = prompt("Enter the secret code:");
// }

// console.log("CORRECT!");

// let input = prompt('Type something!');

// while(true){
//     input = prompt(input);
//     if(input === 'STOP') break;
// }

// console.log('ALRIGHT!');



let i = parseInt(prompt("Welcome! Enter maximum number:"));
let j = parseInt((Math.random() * i) + 1);
console.log(j);
i = prompt("Now enter your first guess:");
let k = 1;

while (parseInt(i) !== j || i !== 'q') {
    if (i < j) {
        i = prompt("Your guess is lower than the expected number. Try again:");
        console.log(`attempt ${++k}`);
    }
    else if (i > j) {
        i = prompt("Your guess is higher than the expected number. Try again:");
        console.log(`attempt ${++k}`);
    }

}

if (i === 'q') {
    console.log('Force Quit used!')
} else {
    let l = prompt(`Yey! You guessed it right in ${k} attempts. Enter 'EXIT' to win the medal(only way you can leave the game):`).toString().toUpperCase();
    while (l !== 'EXIT') {
        l = prompt("You are supposed to enter 'EXIT':").toString().toUpperCase();
    }
}
console.log('EXITED!');