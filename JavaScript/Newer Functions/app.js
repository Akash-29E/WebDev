function rollDie(numSides = 6) { //numSides = 6 defaults the value to 6 if not passed by the function call.
    Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'Hey there') {
    console.log(`${msg}, ${person}!`);
}

greet('Gurdur'); // This will return 'Gurdur, undefined!'. We need to be mindful about sequence of input.

//SPREAD
Math.max(44, 65, 277, 780, 1, 45); //Returns max value which is 780

const nums = [88, 42, 31, 77, 89, 96, 22];

Math.max(...nums) //Seperate values from nums array and inputs it all as arguments, returns 96
console.log(Math.max(...nums));
console.log(...nums); //...nums is same as passing each aruments with comma in between i.e console.log(88,42,31,77,96,22);


const cats = ['Blue', 'Jemm', 'Scotty'];
const dogs = ['Rusty', 'Candy'];
const allPets = [...cats, ...dogs, 'Tumby', 'Grace']; // combines arrays and we can add more elements to it 
console.log(allPets);

const chars = [...'hello'];// ['h','e','l','l','o']

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine }; // { legs:4, isFurry: true, family: 'Caninae'}; >>>> Canine wins family propery since it came last in sequence.

const numbs = { ...[2, 4, 8] }; // { 0: 2, 1: 4, 2: 8 }
const strig = { ...['HIII'] }; // { 0:'H', 1:'I', 2:'I', 3:'I'}

dataFromForm = {
    email: 'bobjoasea@gmail.com',
    password: 'ttuerqo',
    username: 'chuckybuck'
};

const newUser = { ...dataFromForm, id: 22314, isAdmin: false };
