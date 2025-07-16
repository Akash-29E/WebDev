const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION SUCCESSFUL!');
    })
    .catch((e) => {
        console.log('OH NO,MONGO CONNECTION ERROR!');
        console.log(e)
    })

// const p = new Product({
//     name: 'Strawberry',
//     price: 10,
//     category: 'fruit'
// })
// p.save().then(p=> console.log(p))
// .catch(e => console.log(e))

const seedProducts = [
    {
        name: 'Apple',
        price: 1.25,
        category: 'fruit'
    },
    {
        name: 'Carrot',
        price: 0.65,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 2.50,
        category: 'dairy'
    },
    {
        name: 'Spinach',
        price: 1.10,
        category: 'vegetable'
    },
    {
        name: 'Banana',
        price: 0.75,
        category: 'fruit'
    },
    {
        name: 'Cheddar Cheese',
        price: 4.20,
        category: 'dairy'
    },
    {
        name: 'Strawberry',
        price: 2.00,
        category: 'fruit'
    }
];

Product.insertMany(seedProducts)
.then(() => console.log("Products inserted"))
.catch(err => console.error(err));