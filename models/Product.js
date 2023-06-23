const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    qty:Number

})
    
    module.exports = mongoose.model('Product', productSchema)