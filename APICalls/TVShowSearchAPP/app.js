const form = document.querySelector('#searchForm');
const searchInpt = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults')

form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    searchResults.innerHTML = '';
    searchQry = form.elements.query.value;
    const config = {params: {q: searchQry}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    searchInpt.value = '';
    makeImages(res.data);
   
})

const makeImages = (data) => {
    for (let result of data){
        if (result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            searchResults.append(img);
        }
        
    }   
} 




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

// const dadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         return res.data.joke;
//     } catch (e) {
//         console.log('No Jokes Available!', e)
//     }
    
// }


// jokeBtn.addEventListener('click', async () => {
//     newLI = document.createElement('LI');
//     newLI.textContent = await dadJoke()
//     jokeContent.append(newLI)
// })