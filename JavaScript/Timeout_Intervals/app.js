const myid = setInterval(() => {
    console.log(Math.random())
}, 2000);


setTimeout(() => {
    clearInterval(myid)
}, 10000);