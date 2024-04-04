const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({extended:true}))   // to extract or retreive data from view need this line

const viewsPath = path.join(__dirname,'./views')
app.set('view engine', 'ejs')
app.set('views',viewsPath)

app.get('/',(req,res)=>{
    res.render('new.ejs')
})

app.post('/submit',(req,res)=>{
    const nameLen = req.body["fName"].length + req.body["lName"].length;
    res.render('new.ejs',{
        numberOfLetters:nameLen
    })
})

app.listen(3001,()=>{
    console.log("http://localhost:3001")
})