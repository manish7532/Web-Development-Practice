const mongoose = require('mongoose')
const express = require('express')
const app = express()

//connection to mongoDB
mongoose.connect('mongodb://localhost:27017/demo')

//midllewares 
app.use(express.json())  //helps .save method to convert data in json object
app.use(express.urlencoded({ extended: true }))


//schema
//defines structutre of documnet
//defualt values ,validators, etc.

const userschema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
})


// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validators, etc., whereas a Mongoose model
// provides an interface to the database for creating,
// querying, updating, deleting records, etc.

// collection creation
const User = new mongoose.model('User', userschema)   // its a class, we can create obj to create new user info


//routes

// display all users
app.get('/', async (req, res) => {
    try {
        const result = await User.find()
        res.send(result)
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
})



// add new entry
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body)
        const result = await newUser.save()          // instead of .save can use .insertMany for multiple document insertion
        res.send(newUser)
        console.log(newUser);
    }
    catch (err) {
        console.log(err);
    }
})




// replace existing entry
app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        await User.updateOne({ _id: id }, req.body)
        const thatuser = await User.find({ _id: id })
        console.log(thatuser);
        res.send(thatuser)
    }
    catch (err) {
        console.log(err);
    }
})



// change some record in existing entry
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        await User.updateOne({ _id: id }, req.body)
        const thatuser = await User.find({ _id: id })
        console.log(thatuser);
        res.send(thatuser)
    }
    catch (err) {
        console.log(err);
    }
})



//delete existing entry
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        let result = await User.findByIdAndDelete({ _id: id })    //  or can use deleteOne
        console.log(result);
        res.send(result)
    }
    catch (err) {
        console.log(err);
    }
})


app.listen(3001, () => {
    console.log("http://localhost:3001");
})