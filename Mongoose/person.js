const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION SUCCESSFUL!');
    })
    .catch((e) => {
        console.log('OH NO, ERROR!');
        console.log(e)
    })

const { Schema, model } = mongoose;

const personSchema = new Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.fist} ${this.last}`
})

personSchema.pre('save', function(){
    console.log('About to save!')
})
personSchema.post('save', function(){
    console.log('Just Saved!')
})

const Person = model('Person', personSchema);