const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const product = new Schema({
    product_name: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'users'

        
    }
});

const PRODUCT = mongoose.model('product', product)
module.exports = PRODUCT
