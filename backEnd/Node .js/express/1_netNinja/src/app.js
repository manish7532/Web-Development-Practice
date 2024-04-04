const express = require('express')
const path = require('path')
const app = express();
const morgan = require('morgan')

const viewsPath = path.join(__dirname, '../views')
const publicPath = path.join(__dirname,'../public')
const imagePath = path.join(__dirname, '../public/images')

app.listen(3001, () => {
    console.log("http://localhost:3001")
})


//middlewares
// app.use((req,res,next)=>{
//     console.log("New request made ")
//     console.log("host "+req.hostname)
//     console.log("Path "+req.path)
//     console.log("method "+req.method)
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("In next middleware")
//     next();
// })
app.use(express.static(publicPath))
app.use(express.static(imagePath))
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', viewsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "ABOUT"
    })
})

app.get('/blog', (req, res) => {
    const blogs = [
        { title: "Manish Finds मक्सत", snippet: "Lorem ipsum dolor sit amett consectetur" },
        { title: "MArio Finds Stars", snippet: "Lorem ipsum dolor sit amett consectetur" },
        { title: "Anushka Finds Treasure", snippet: "Lorem ipsum dolor sit amett consectetur" }
    ]
    res.render('blog', {
        title: "Blog",
        blogs
    })
})


app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: "Not Found"
    })
})

// app.use('*', (req, res) => {
//     res.status(404).render('404', {
//         title: "Not Found"
//     })
// })






// app.get('/', (req, res) => {
//     res.sendFile('/index.html', { root: viewsPath })
// })

// app.get('/about', (req, res) => {
//     res.sendFile('/about.html', { root: viewsPath })
// })

// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })

// app.get('*', (req, res) => {
//     res.sendFile('/404.html', { root: viewsPath })
// })



