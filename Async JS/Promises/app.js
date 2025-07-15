// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout:(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)

// }

// fakeRequestCallback('www.books.com',
//     (response) => {
//         console.log('IT WORKS!');
//         console.log(response);
//         fakeRequestCallback(`www.books.com/page2`,
//             (response) => {
//                 console.log('IT WORKS AGAIN!');
//                 console.log(response);
//             }, (failure) => {
//                 console.log('HOLY! ITS AN ERROR(2nd Request)', failure);

//             })
//     }, (failure) => {
//         console.log('HOLY! ITS AN ERROR', failure);

//     })

const fakeRequestPromise = (url) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (delay <= 4000) {
                resolve(`Here is your data from fake site ${url}`);
            } else {
                reject(`Connection Thyme out, please regrow! URL: ${url}`);
            }
        }, delay)
    })
}

const requestArr = ['page1', 'page2', 'info', 'about', 'annoncements', 'help', 'banana'];
let i = 0;

const request = fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`);
request
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .then((resolve) => {
        console.log(resolve, `run no: ${i++}`);
        return fakeRequestPromise(`www.yahoo.com/${requestArr[i]}`)
    })
    .catch((err) => {
        console.error(err, `run no: ${i++}`);
    })



const getIceCream = new Promise((resolve, reject) => {
    let isMomHappy = Math.round(Math.random());

    if (isMomHappy < 1) {
        resolve("Here's your ice cream 🍦");
    } else {
        reject("No ice cream today 😢");
    }
});

getIceCream
    .then((iceCream) => {
        console.log("Yay! " + iceCream);
    })
    .catch((error) => {
        console.log("Oh no! " + error);
    });

const delayedClrChange = (color, delay) =>{
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{            
            document.body.style.backgroundColor = color;
            resolve();
            // reject();
        }, delay)
    })
}

delayedClrChange('red', 1000)
    .then (() => delayedClrChange('violet', 1000))
    .then (() => delayedClrChange('pink', 1000))
    .then (() => delayedClrChange('blue', 1000))
    .then (() => delayedClrChange('teal', 1000))
    .then (() => delayedClrChange('purple', 1000))
    .catch(() => delayedClrChange('black', 1000))