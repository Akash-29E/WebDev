const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION SUCCESSFUL!');
    })
    .catch((e) => {
        console.log('OH NO, ERROR!');
        console.log(e)
    })

const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        // min: [0, 'Price must be positive, baka!']

    },
    onSale: {
        type: Boolean,
        default: false
    },
    tags: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: {
            values:['S', 'M', 'L', 'XL'],
            message: 'Invalid Size. Please select from S,M,L and XL'
        }
    }
})

productSchema.methods.greet = function() {
    console.log("Hello! HOW ARE YA!?");
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    this.save();
}

productSchema.methods.addTags = function(...newCat) {
    this.tags.push(...newCat);
    return this.save();
}

productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale:true, price:1})
}


const Product = model('Product', productSchema);

const findProduct = async (a) => {
    const foundProduct = await Product.findOne({name: a});
    foundProduct.greet();
}

const addTags = async (a, ...b) =>{
    const foundProduct = await Product.findOne({name: a});
    await foundProduct.addTags(...b);
    console.log(foundProduct)
}

// const bike = new Product({ name: 'Jersey', price: 11, tags: ['Cycling'], size: 'S' })
// bike.save()
    // Product.findOneAndUpdate({name: 'Mountain Bike'}, {price:-210}, {new:true, runValidators:true})
    // .then(e => console.log('WORKED!', e))
    // .catch((err) => console.log('ERRORRR!!', err))