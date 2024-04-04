const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//mongodb conncetion
mongoose.connect('mongodb://localhost:27017/crud_demo')

// define schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

// model / collection creation
const User = new mongoose.model('User', userSchema)


// setting view engine  
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "./templates/views"))



//middlewares
// static files
app.use(express.static(path.join(__dirname, './templates/public')))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


//routes
//getting the records to display
app.get('/', async (req, res) => {
    try {
        const result = await User.find()
        res.render('index', { result })
    }
    catch (err) {
        console.log(err)
        res.status(404).send("SomeThing Went Wrong")
    }
})

//adding new users
app.post('/add', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.redirect('/')
        console.log(newUser);
    }
    catch (err) {
        res.status(404).send("Something went wrong")
        console.log(err);
    }
})

//deleting existing users
app.post('/delete', async (req, res) => {
    try {
        const id = req.body.resultID
        await User.deleteOne({ _id: id })
        res.redirect('/')
    }
    catch (err) {
        res.redirect('/')
        console.log(err);
    }
})


//updating
app.post('/update', async (req, res) => {
    try {
        await User.updateOne({ _id: req.body.resultID }, req.body)
        res.redirect('/')
    }
    catch (err) {
        res.redirect('/')
        console.log(err);
    }
})


//server start
app.listen(3001, () => {
    console.log('http://localhost:3001')
})