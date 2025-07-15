// fetch("https://dattebayo-api.onrender.com/characters/1344")
// .then(res => {
//     console.log('RESOLVED', res);
//     return res.json()
// })
// .then (data => {
//     console.log(data);
//     return fetch("https://dattebayo-api.onrender.com/characters/1307");
// })
// .then (res=>{
//     console.log('RESOLVED 2', res);
//     return res.json()
// })
// .then(res => console.log(res))
// .catch(err => {
//     console.log('ERROR', err)
// })

// const loadNarutoPeople = async () => {
//     try {
//         const res = await fetch('https://dattebayo-api.onrender.com/characters/1307')
//         const data = await res.json()
//         console.log(data)
//         const res2 = await fetch('https://dattebayo-api.onrender.com/characters/1307')
//         const data2 = await res2.json()
//         console.log(data2)
//     } catch(e){
//         console.log('AAAHHH! ERROR',e)
//     }
// }

// loadNarutoPeople()

// const narutoPeople = async (id) => {
//     const res = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
//     console.log(res.data)
// }

// axios.get('https://dattebayo-api.onrender.com/characters/1307')
//     .then(res => {
//         console.log('RESPONSE:', res)
//     })
//     .catch(err => {
//         console.log('ERROR!', err)
//     })

const dadJoke = async () => {
    
    
}

const jokeBtn = document.getElementById('jokeBtn');
const jokeContent = document.getElementById('jokes');

jokeBtn.addEventListener('click', async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        newLI = document.createElement('LI');
        newLI.textContent = res.data.joke
        jokeContent.append(newLI)
    } catch (e) {
        console.log('No Jokes Available!', e)
    }
    
})