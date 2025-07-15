const Jokes = require('give-me-a-joke')
// console.dir(Jokes)
const colors = require('colors')

Jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});

// console.log('RAINBOW!!!!'.rainbow)