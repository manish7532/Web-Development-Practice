const express = require('express')
const path = require('path')

const app = express()

app.listen(4001)
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('./pass.html', { root: __dirname })
})

app.post('/check', (req, res) => {
        const password = req.body['password']
        if(password=="ILOVEHER"){
            // alert("Yeah!! bro")
            res.sendFile('./secret.html', {root: __dirname})
        }
        else{
            res.sendFile('./pass.html', {root: __dirname})
        }
})

