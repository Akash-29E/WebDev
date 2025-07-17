const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const cats = Product.schema.obj.category.enum;
// const cats = productSchema.obj.category.enum;
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('MONGO CONNECTION SUCCESSFUL!');
    })
    .catch((e) => {
        console.log('OH NO,MONGO CONNECTION ERROR!');
        console.log(e)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.get('/products', async (req, res) => {
    const Cat = req.query.category ? req.query.category : 'All';
    const products = await Product.find({});
    // Search by Query param if it assign in url
    res.render('products/index', { products, cats, Cat })
})

app.get('/products/new', (req, res) => {
    const Cat = req.query.category ? req.query.category : 'vegetable';
    res.render('products/new', { cats, Cat });
})

app.post('/products', async (req, res) => {
    console.log(req.body);
    const addNew = new Product(req.body);
    await addNew.save();
    res.redirect(`/products/${addNew._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/details', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, cats });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    console.log(product);
    res.redirect('/products');
})

app.listen('3000', () => {
    console.log('APP IS LISTENING ON PORT 3000!')
})