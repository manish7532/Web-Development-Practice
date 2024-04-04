const express = require('express')
const path = require('path')
const app = express()

const viewsPath = path.join(__dirname, './views')

app.set('view engine', 'ejs')
app.set('views', viewsPath)

const d = new Date("March 2, 2024 12:13:00")
const day = d.getDay()

let type = "A weekDay"
let adv = "it's time to workhard"

if (day == 0 || day == 6) {
    type = "The weekend"
    adv = "it's time to have some fun"
}


app.get('/', (req, res) => {
    res.render('index.ejs', {
        daytype: type,
        advice: adv,
    })
})


app.listen(4001, () => {
    console.log(`Listening on url : http://localhost:4001`)
})

