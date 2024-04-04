const express = require("express")
const path = require('path')

const app = express()


app.use(express.static("public"))


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('*', (req, res) => {
    res.sendStatus(404).send('404 Not Found')

})

app.listen(3001, () => {
    console.log("http://localhost:3001")
})