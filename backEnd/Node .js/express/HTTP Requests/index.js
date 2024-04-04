const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Hell yeah Bro!!!')
    res.sendStatus(201);
})

app.post("/register", (req, res) => {
    // res.send("HELLOO")
    res.sendStatus(201)
})


app.put("/user/manish", (req, res) => {
    res.sendStatus(200)
})

app.patch("/user/manish", (req, res) => {
    res.sendStatus(200)
})

app.delete("/user/manish", (req, res) => {
    res.sendStatus(200)
})

app.listen(3001, () => {
    console.log("listening on port 3001")
})