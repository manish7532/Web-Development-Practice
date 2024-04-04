const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// const staticPath = path.join(__dirname,'../views')
const viewsPath = path.join(__dirname,'../notViews/views')
const partialsPath = path.join(__dirname, '../notViews/partials')
app.set('view engine', 'hbs');
app.set('views', viewsPath);  // to set folder named other than views to views or seeting path of views folder
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{
    res.render('index',{
        name : "Manish"
    })
})

app.get('*',(req,res)=>{
    res.render("404",{
        error: "page cannont be found"
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(3001,()=>{
    console.log("http://localhost:3001")
})