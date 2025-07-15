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

const prices = [1.39, 4.59, 7.99, 2.19, 5.79, 0.5, 8.6, 9.4, 0.1];
const hehe = [3, 5, 2, 1, 10];

const total = hehe.reduce((total, price) => total + price);

const minium = prices.reduce((min, curr) => {
    if (min >= curr) return curr;
    else return min;
})
// console.log(minium);

const bestMovie =
    movies
        .reduce((bmv, cmv) => {
            if (bmv.score > cmv.score) return bmv;
            else return cmv;
        });

console.log(bestMovie.name);


const person = {
    firstName: 'James',
    lastName: 'Bond',
    currentNumber: 2,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: (num) => console.log(this)
}