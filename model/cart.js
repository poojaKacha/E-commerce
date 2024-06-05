const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cart = new Schema({
   

   
    quntity: {
        type: Number,
        required: true,
        min: 1,


    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product"
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },


});

const CART = mongoose.model('cart', cart)
module.exports = CART
