// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i=1; i<=200; i++){
    const pokeDiv = document.createElement('div')
    pokeDiv.classList.add('pokemon')
    const label = document.createElement('span')
    label.append(`#${i}`)
    let img = document.createElement('img')
    img.src = `${baseURL}${i}.png`

    container.append(pokeDiv)
    poke.appendChild(img)
    poke.appendChild(label)

}




// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }
