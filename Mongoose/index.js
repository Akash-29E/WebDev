const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(()=>{
    console.log('CONNECTION SUCCESSFUL!');
})
.catch((e) =>{
    console.log('OH NO, ERROR!');
    console.log(e)
})

const movieSchema = new mongoose.Schema({
    title:String,
    year: Number,
    score: Number,
    rating:String
})

const Movie = mongoose.model('Movie', movieSchema);
// const deva = new Movie({
//     title: 'Deva',
//     year:2025,
//     score: 7.1,
//     rating: 'M'
// })

// Movie.insertMany([
//   {
//     title: "Sholay",
//     year: 1975,
//     score: 9.0,
//     rating: "U"
//   },
//   {
//     title: "Dilwale Dulhania Le Jayenge",
//     year: 1995,
//     score: 8.8,
//     rating: "U"
//   },
//   {
//     title: "Lagaan",
//     year: 2001,
//     score: 8.1,
//     rating: "U"
//   },
//   {
//     title: "3 Idiots",
//     year: 2009,
//     score: 8.4,
//     rating: "U"
//   },
//   {
//     title: "Gully Boy",
//     year: 2019,
//     score: 8.0,
//     rating: "U/A"
//   }
// ]);