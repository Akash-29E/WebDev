const express = require ('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('MONGO CONNECTION SUCCESSFUL!');
    })
    .catch((e) => {
        console.log('OH NO,MONGO CONNECTION ERROR!');
        console.log(e)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dogs', (req,res) => {
    res.send('woof');
})

app.listen('3000', () => {
    console.log('APP IS LISTENING ON PORT 3000!')
})