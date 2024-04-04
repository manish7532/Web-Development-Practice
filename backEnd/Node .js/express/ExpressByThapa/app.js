const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send([{
        id: 1,
        name: "Manish"
    },
    {
        id: 2,
        name: "Madhura"
    }
    ])
})

app.get("/new", (req, res) => {
    res.json([{
        id: 1,
        name: "Mandar"
    }, {
        id:2,
        name: "Kamalakar"
    }])
})


app.listen(3001, () => {
    console.log("listening on prt 3001")
})