const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()

//connect to DB
mongoose.connect('mongodb://localhost:27017/ToDo')

// define schema
const todoSchema = new mongoose.Schema({
    item: String
})

//define model
const ToDo = mongoose.model('ToDo',todoSchema)

//server start
app.listen(3001, () => {
    console.log('http://localhost:3001');
})


// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routes
//insert
app.post('/ToDo', async (req, res) => {
  try {
    const item1 = req.body.item1;
    await ToDo.create({ item: item1 });
    res.redirect('/');
  } catch (e) {
    res.status(500).render('index');
  }
});


//get home page
app.get('/', async (req, res) => {
  try {
    const items = await ToDo.find().toArray();
    res.render('index', { items });
  } catch (e) {
    res.status(500).render('index');
  }
});


//delete one data
app.post('/deleteOne', async (req, res) => {
  try {
    const itemID = req.body.itemID;
    await ToDo.deleteOne({ _id: itemID });
    res.redirect('/');
  } catch (e) {
    res.status(500).render('index');
    console.log(e);
  }
});
