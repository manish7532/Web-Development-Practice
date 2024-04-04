const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    pName:{
        type:String,
        required:true
    },
    pQuantity:{
        type:Number,
        min:1,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    } 
})

const Product = new mongoose.model('Product',productSchema)

module.exports = Product