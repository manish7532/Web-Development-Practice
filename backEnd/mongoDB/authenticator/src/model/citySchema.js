const mongoose = require('mongoose')


const citySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    stateName: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    }
})

const Citi = new mongoose.model('Citi', citySchema)

module.exports = Citi;