const mongoose = require('mongoose')

// schema
const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        // default: 'user'
        required:true
    },
    state:{
        type:Boolean,
        default:true,
        required:true
    },
    photo:{
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    otp:{
        type:String,
        default: null
    }

})

// model / collction created
const User = new mongoose.model('User', usersSchema)

module.exports = {
    mongoose,
    User
}