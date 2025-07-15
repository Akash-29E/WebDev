const nums = [9,8,7,6,5,4,3,2,1]

function print(p){
    console.log(p*p);
}

const movies = [
    {
        title: 'Amdeus',
        score: 67
    },
    {
        title: 'Rico',
        score: 55
    },
    {
        title: 'Chandi',
        score: 89
    },
    {
        title: 'Rio',
        score: 98
    },
    {
        title: 'Shrek',
        score: 21
    },
    {
        title: 'AOT',
        score: 99
    },
];

let mNames = movies.map(function (movie){
    console.log(`${movie.title} has scored ${movie.score} on today's list.`);
    return movie.title;
})

console.log(mNames);