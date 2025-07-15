async function hello() {  //To declare async function
}

const sing = async () => {  //Callback async function
    return 'HO HO HO HO';
}

sing()
    .then((data) => {  // resolved promise
        console.log(data)
    })

const dance = async () => {  //rejected Callback async function
    throw 'UH NO! PROBLEM' //gives error
    return 'HO HO HO HO';
}

dance()
    .then(data => {
        console.log('RESOLVED', data)
    })
    .catch(err => {
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (password === 'iamdumb') return 'WELCOME!'
    throw 'Invalid Password'
}

login('asqwefsd', 'ias')
    .then(msg => {
        console.log('Logged in!');
        console.log(msg);
    })
    .catch(err => {
        console.log(err)
    })


const delayedClrChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
            // reject();
        }, delay)
    })
}

// delayedClrChange('red', 1000)
//     .then(() => delayedClrChange('violet', 1000))
//     .then(() => delayedClrChange('pink', 1000))
//     .then(() => delayedClrChange('blue', 1000))
//     .then(() => delayedClrChange('teal', 1000))
//     .then(() => delayedClrChange('purple', 1000))
//     .catch(() => delayedClrChange('black', 1000))

async function rainbow() {
    await delayedClrChange('red', 1000)
    await delayedClrChange('orange', 1000)
    await delayedClrChange('yellow', 1000)
    await delayedClrChange('green', 1000)
    await delayedClrChange('blue', 1000)
    await delayedClrChange('indigo', 1000)
    await delayedClrChange('violet', 1000)
    return 'ALL DONE'
}

async function rainbowdone() {  //TO use value returned by rainbow(), we need to create a new async function and assign a variable to rainbow() using await. 
    const rain = await rainbow();
    console.log(rain);
}

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay < 4000) {
                resolve(`Here is your data from (madeup) site ${url}`);
            }
            else {
                reject('Connection Timeout!');
            }


        }, delay)
    })
}

const fakeRequestRun = async (a) => {
    const print = await fakeRequest(a);
    console.log(print);
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('www.asd.ca');
        console.log(data1);
        let data2 = await fakeRequest('www.asd.ca/asd');
        console.log(data2);

    } catch (e) {
        console.log('CAUGHT AN ERROR!')
        console.log('ERROR IS:', e)

    }
}