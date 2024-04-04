const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient("mongodb://localhost:27017")
const path = require('path')
const app = express()


// db conncetion
let items = []
client.connect()
let db = client.db('ToDo')

//server started 
app.listen(3001, () => {
    console.log("http://localhost:3001")
})

//middleware
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.post('/ToDo', async (req, res) => {
    try {
        const item1 = req.body.item1
        await db.collection('todos').insertOne({ item: item1 })
       res.redirect('/')
    }
    catch (e) {
        res.status(500).render('index')
    }
})


app.get('/', async (req, res) => {
    try {
        items = await db.collection('todos').find().toArray();
        res.render('index', { items });
    } catch (e) {
        res.status(500).render('index');
        // console.error(e);
    }
});


app.post('/deleteOne', async (req, res) => {    
    try {
        const itemID = req.body.itemID
        await db.collection('todos').deleteOne({_id: new ObjectId(itemID) })
        res.redirect('/')
    }
    
    catch (e) {
        res.status(500).render('index');
        console.log(e);
    }
});
