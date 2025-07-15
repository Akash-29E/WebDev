const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

q = numbers.filter(n => {
    return n < 5;
});

console.log(q);

const movies = [
    {
        name: 'Run',
        score: 50,
        year: 2003
    },
    {
        name: 'Race',
        score: 90,
        year: 2013
    },
    {
        name: 'Housefull',
        score: 80,
        year: 2012
    },
    {
        name: 'Hera Pheri',
        score: 85,
        year: 2005
    },
    {
        name: 'Golmaal',
        score: 92,
        year: 2004
    },
    {
        name: 'Race 2',
        score: 60,
        year: 2003
    }
];

const goodMovies =
    movies
        .filter(n => n.score > 80)
        .map(m => m.name);
console.log(goodMovies);


const words = ['god', 'dog', 'cat', 'wolf'];

const p = words.some(word => {
    return word[0]==='d';
});
console.log(p); //Returns true

function allEvens(nu){
    return nu.every(n => parseInt(n)%2 === 0)
    }

console.log(allEvens([2,4,6,8,2,4,66,42])); //Returns true