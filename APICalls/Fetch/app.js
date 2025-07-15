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

const loadNarutoPeople = async () => {
    try {
        const res = await fetch('https://dattebayo-api.onrender.com/characters/1307')
        const data = await res.json()
        console.log(data)
        const res2 = await fetch('https://dattebayo-api.onrender.com/characters/1307')
        const data2 = await res2.json()
        console.log(data2)
    } catch(e){
        console.log('AAAHHH! ERROR',e)
    }
}

loadNarutoPeople()