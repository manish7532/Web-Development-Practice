const mongoose = require('mongoose')


const stateSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    stateName: {
        type: String,
        unique: true,
        required: true
    },
    stateIsoCode: {
        type: String,
        required: true
    },
    stateCode: {
        type: Number,
        required: true
    }
})

const Stat = new mongoose.model('Stat', stateSchema)

module.exports = Stat;