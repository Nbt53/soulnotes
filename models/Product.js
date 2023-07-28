const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    qty: Number,
    description: String,
    notesOne: String,
    notesTwo: String,
    notesThree: String,



})

module.exports = mongoose.model('Product', productSchema)