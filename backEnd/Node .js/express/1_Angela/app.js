const express = require('express')
const path = require('path')

const app = express()


app.listen(3001)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

app.post('/submit', (req, res) => {
    var fullName = ""
    fullName = req.body["firstName"] + " " + req.body["surName"]
    res.send(`<h1>Full NAme =  </h1><h2>${fullName}</h2>`)
})

app.get("*", (req, res) => {
    res.status(404).send("404 Not Found")
})