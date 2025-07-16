const mongoose = require('mongoose');

const {Schema, model} = mongoose;
const productSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true,
        min:0
    },
    category:{
        type: String,
        lowercase: true,
        enum:['fruit', 'vegetable', 'dairy']
    }
})

const Product = model('Product', productSchema);

module.exports = Product;