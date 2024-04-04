const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { mongoose, User } = require('./model/userSchema')
const Product = require('./model/productSchema')
const Stat = require('./model/stateSchema')
const Citi = require('./model/citySchema')
const passport_config = require('./passportAuth/passport_config')
const flash = require('express-flash')
const bcrypt = require('bcryptjs');
const session = require('express-session')
const passport = require('passport')
const nodemailer = require('nodemailer')
const sendEmail = require('./resetPass/email');
const otpGenerator = require('otp-generator');
const { match } = require('assert')
const { stat } = require('fs/promises')
const State = require('country-state-city').State;
const City = require('country-state-city').City;
const formidable = require('formidable')
const fs = require('fs')

const app = express()

// DB connection
mongoose.connect('mongodb://localhost:27017/authDemo')


//middlewares

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../templates/views')))
app.use(morgan('dev'))
app.use(passport.initialize())
app.use(passport.session())

// setting view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates/views'))





//================
// Routes
//================



// register page
app.get('/register', (req, res) => {
    const msg = req.flash('message')
    req.flash('message', null)
    res.render('register', { msg })
})



// registering user info
// app.post('/register', async (req, res) => {
//     try {
//         if (req.body.password === req.body.confirmPass) {
//             const { firstname, lastname, email, mobile, gender, role, password } = req.body;

//             // Check if user with the given email already exists
//             let user = await User.findOne({ email });
//             if (user) {
//                 req.flash('message', 'User already exists');
//                 return res.redirect('/register');
//             }


//             // Hash the password before saving the user
//             const hashedPassword = await bcrypt.hash(password, 5);

//             // Create a new user
//             user = new User({
//                 firstname,
//                 lastname,
//                 email,
//                 mobile,
//                 gender,
//                 role,
//                 password: hashedPassword  // Store hashed password
//             });

//             // Save the user to the database
//             await user.save();

//             console.log("Registered Successfully");
//             res.redirect('/');
//         } else {
//             req.flash('message', 'Password does not match');
//             res.status(500).redirect('/register');
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).redirect('/register');
//     }
// });


app.post('/register', async (req, res) => {
    try {
        if (req.body.password === req.body.confirmPass) {
            var form = new formidable.IncomingForm({
                allowEmptyFiles: true,
                minFileSize: 0
            });
            let fields;
            let files;
            [fields, files] = await form.parse(req);
            if (files) {
                var oldPath = files.userPhoto[0].filepath;
                const og_file_name = files.userPhoto[0].originalFilename;
                const hexaPass = await bcrypt.hash(fields.password[0], 10);
                const newUser = new User({
                    firstname: fields.firstname[0],
                    lastname: fields.lastname[0],
                    email: fields.email[0],
                    mobile: fields.mobile[0],
                    gender: fields.gender[0],
                    role: fields.role[0],
                    password: hexaPass,
                    photo: og_file_name
                });
                const result = await newUser.save();
                if (files.userPhoto[0].originalFilename != "") {
                    var folderpath = path.join(__dirname, '../templates/views/uploads/' + result._id);
                    if (!fs.existsSync(folderpath)) {
                        fs.mkdirSync(path.join(__dirname, '../templates/views/uploads/' + result._id));
                    }
                    var newpath = path.join(__dirname, '../templates/views/uploads/' + result._id + "/" + files.userPhoto[0].originalFilename);
                    fs.copyFile(files.userPhoto[0].filepath, newpath, function (err) {
                        if (err) {
                            console.error(err);
                            return res.status(500).send('Internal Server Error');
                        }
                    });
                }
                console.log("Registered Successfully");
                req.flash('message', 'Registered Successfully');
                return res.redirect('/');
            };
        } else {
            req.flash('message', 'Password does not match');
            res.status(500).redirect('/register');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).redirect('/register');
    }
});


// login page
app.get('/', (req, res) => {
    const msg = req.flash('message')
    req.flash('message', null)
    res.render('login', { msg })
})


// admin dashboard
app.get('/secret', async (req, res) => {
    const tUser = req.user

    if (req.isAuthenticated()) {
        const allUsers = await User.find({ _id: { $ne: tUser._id }, state: true })
        const blockUsers = await User.find({ state: false })
        const allProducts = await Product.find()
        const userProducts = await Product.find({ userId: tUser._id })
        res.render('secret', { tUser, allUsers, allProducts, blockUsers, userProducts })
    }
    else {
        res.redirect('/')
    }
})


//login post request
app.post('/', passport.authenticate('local', {
    failureRedirect: '/'
}),
    async (req, res) => {
        const tUser = await User.findOne({ email: req.body.email });
        req.session.tUser = tUser;

        console.log("logged in");
        res.redirect('/secret')

    })

// logout 
app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/')
        }
    })
})


// user info update by himself
// app.post('/updateMe', async (req, res) => {
//     try {
//         await User.updateOne({ _id: req.body.thatUserID },
//             {
//                 $set: {
//                     firstname: req.body.firstname,
//                     lastname: req.body.lastname,
//                     email: req.body.email,
//                     mobile: req.body.mobile,
//                     gender: req.body.gender
//                 }
//             })
//         console.log("Updated Info Succesfully");
//         res.redirect('/secret')
//     } catch (err) {
//         console.log(err);
//         res.status(400).redirect('/secret')
//     }
// })

app.post("/updateMe", async (req, res) => {
    try {
        var form = new formidable.IncomingForm({
            allowEmptyFiles: true,
            minFileSize: 0
        });
        let fields;
        let files;
        try {
            [fields, files] = await form.parse(req);
        }
        catch (error) {
            console.log(error);
        }
        if (files) {
            var oldPath = files.userPhoto[0].filepath;
            const og_file_path = files.userPhoto[0].originalFilename;
            console.log(fields.userID)
            const result = await User.updateOne(
                { _id: fields.userID },
                {
                    $set: {
                        firstname: fields.firstname[0],
                        lastname: fields.lastname[0],
                        email: fields.email[0],
                        gender: fields.gender[0],
                        mobile: fields.mobile[0],
                        photo: og_file_path
                    }
                }
            );
            if (files.userPhoto[0].originalFilename != "") {
                var folderpath = path.join(__dirname, '../templates/views/uploads/' + fields.userID);
                console.log(folderpath);
                if (!fs.existsSync(folderpath)) {
                    fs.mkdirSync(path.join(__dirname, '../templates/views/uploads/' + fields.userID));
                }
                var newpath = path.join(__dirname, '../templates/views/uploads/' + fields.userID + "/" + files.userPhoto[0].originalFilename);
                fs.copyFile(files.userPhoto[0].filepath, newpath, function (err) {
                    if (err) {
                        console.error(err);
                        return res.status(500).redirect('/secret');
                    }
                });
            }
        }
        res.redirect('/secret');
    }
    catch (err) {
        console.log(err);
        res.status(400).redirect('/secret')
    }
});





// user update btn request
app.post('/updateU', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const tUser = req.user
            const user = await User.findOne({ _id: req.body.thatUserID })
            res.render('updateUser', { tUser: tUser, user: user })
        } else {
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})

// updating user via admin
app.post('/updateUser', async (req, res) => {
    try {
        const updatedUser = await User.updateOne({ _id: req.body.thatUserID }, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                mobile: req.body.mobile,
                gender: req.body.gender,
                role: req.body.role
            }
        })
        // console.log(updatedUser);
        console.log('user updated succesfully');
        res.redirect('/secret')
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})



//block user
app.post('/block', async (req, res) => {
    try {
        const x = await User.updateOne({ _id: req.body.thatUserID }, { $set: { state: false } })
        console.log(x);
        res.redirect('/secret')
    } catch (err) {
        res.redirect('/')
        console.log(err);
    }
})


// unblock users
app.post('/unblock', async (req, res) => {
    try {
        const unbUser = await User.updateOne({ _id: req.body.thatUserID }, { $set: { state: true } })
        res.redirect('/secret')
    } catch (err) {
        res.redirect('/')
        console.log(err);
    }
})




//==================================
//Products 
//=================================


// get request product page
app.get('/products', async (req, res) => {
    try {
        const tUser = req.user
        if (req.isAuthenticated()) {
            // const allUsers = await User.find({ _id: { $ne: tUser._id }, state: true })
            // const blockUsers = await User.find({ state: false })
            const allProducts = await Product.find()
            const userProducts = await Product.find({ userId: tUser._id })
            res.render('product', { tUser, allProducts, userProducts })
        }
    } catch (error) {
        console.log(err);
        res.status(400).redirect('/')
    }
})


// update products
app.post('/updateProduct', async (req, res) => {
    try {
        if (req.isAuthenticated) {
            await Product.updateOne({ _id: req.body.pid },
                {
                    $set:
                    {
                        userId: req.body.userId,
                        pName: req.body.pName,
                        pQuantity: req.body.pQuantity,
                        price: req.body.price
                    }
                })
            res.redirect('/products')
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).redirect('/secret')
    }
})

// delete product
app.post('/deleteProduct', async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.body.pid })
        res.redirect('/products')
    } catch (error) {
        console.log(error);
        res.redirect('/')

    }
})


// adding new products
app.post('/addP', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()

    res.redirect('/products')
})



//==================================
//Region 
//=================================


//state page get  
app.get('/state', async (req, res) => {
    try {
        const tUser = req.user
        const states = State.getStatesOfCountry('IN')
        const msg = req.flash('message')
        const dbStates = await Stat.find()
        req.flash('message', '')
        if (req.isAuthenticated()) {
            res.render('state', { tUser, states, msg, dbStates })
        }
    } catch (error) {
        console.log(err);
        res.status(400).redirect('/')
    }
})


// state post
app.post('/state', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            let stateCodes = { 'AD': 37, 'AR': 12, 'AS': 18, 'BR': 10, 'CG': 22, 'DL': 7, 'GA': 30, 'GJ': 24, 'HR': 6, 'HP': 2, 'JK': 1, 'JH': 20, 'KA': 29, 'KL': 32, 'LD': 31, 'MP': 23, 'MH': 27, 'MN': 14, 'ML': 17, 'MZ': 15, 'NL': 13, 'OR': 21, 'PY': 34, 'PB': 3, 'RJ': 8, 'SK': 11, 'TN': 33, 'TS': 36, 'TR': 16, 'UP': 9, 'UK': 5, 'WB': 19 }
            if (stateCodes[req.body.stateIsoCode] == req.body.stateCod) {
                const temp = State.getStateByCodeAndCountry(req.body.stateIsoCode, "IN")
                const newState = new Stat({
                    userId: req.body.userId,
                    country: req.body.country,
                    stateName: temp.name,
                    stateIsoCode: req.body.stateIsoCode,
                    stateCode: req.body.stateCod
                })
                await newState.save()
                req.flash('message', 'State Saved SuccesFully')
                res.redirect('/state')
            }
            else {
                req.flash('message', 'StateName & code does not match')
                res.redirect('/state')
            }
        }
        else {
            res.flash('message')
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        req.flash('message', 'Something went Wrong')
        res.redirect('/state')
    }
})

// delete state 
app.post('/deleteState', async (req, res) => {
    try {
        await Stat.deleteOne({ _id: req.body.stateId })
        req.flash('message', "Entry Deleted successfully")
        res.redirect('/state')
    } catch (error) {
        console.log(error);
        req.flash('message', "can't delete, something went wrong!!!")
        res.redirect('/state')
    }
})

// city get request
app.get('/city', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const tUser = req.user;
            const dbStates = await Stat.find();
            const cities = await Citi.find()
            const msg = "";
            res.render('city', { tUser, dbStates, cities, msg });
        }
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


// dynamic city content 
app.get('/city/get-cities', async (req, res) => {
    try {
        const temp = City.getCitiesOfState("IN", req.query.stateIsoCode)
        const city = []
        temp.forEach((i) => {
            city.push(i.name)
        })
        res.json(city)
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})

// addding city data post req
app.post('/city', async (req, res) => {
    try {
        const temp = State.getStateByCodeAndCountry(req.body.stateIsoCode, "IN")
        const c = new Citi({ userId: req.body.userId, stateName: temp.name, cityName: req.body.cityName })
        await c.save()
        req.flash('message', 'City Saved SuccesFully')
                res.redirect('/city')
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})


// dellete city
app.post('/deleteCity',async(req,res)=>{
    try {
        await Citi.deleteOne({_id:req.body.cid})
        req.flash('message','1 city deleted')
        res.redirect('/city')
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})


//=============================

//forgot pass section

//=============================


//forgot
app.get('/forgot', async (req, res) => {
    const msg = req.flash('message')
    req.flash('message', null)
    res.render('forgot', { msg })
})

//reset-pass
app.get('/reset', async (req, res) => {
    // const email = req.email
    const msg = req.flash('message')
    req.flash('message', null)
    res.render('reset', { msg })
})


// Generate OTP
const generateOTP = () => {
    return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
};


// Route for initiating password reset
app.post('/forgot', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            req.flash('message', 'User not found')
            return res.status(404).redirect('/forgot');
        }

        // Generate OTP and set expiry time
        const otp = generateOTP();
        req.session.email = user.email
        req.session.otpExpiration = Date.now() + 300000   // 5 minutes time of expiration

        // // Store OTP and expiry time in session
        await User.updateOne({ email: req.body.email }, { $set: { otp: otp } })


        const mailOptions = {
            from: 'mjyt127532@gmail.com',
            to: user.email,
            subject: 'Reset Opt',
            html: `<h3>Dont forget anymore</h3><p>Your reset otp is <h2>${otp}</h2></p>`
        };

        // Send OTP to user's email
        sendEmail(mailOptions);
        // res.send('OTP sent successfully');
        res.redirect('/reset')
    } catch (error) {
        console.error(error);
        req.flash('message', 'Internal Server Error')
        res.status(500).redirect('/forgot');
    }
});


// Route for resetting password
app.post('/reset', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.session.email });
        if (user.otp !== req.body.otp || new Date() > new Date(req.session.otpExpiration)) {
            // Invalid OTP or expired
            req.flash('message', "Invalid OTP")
            req.session.otpExpiration = null
            user.otp = null
            await user.save()
            return res.status(400).redirect('/reset');
        }

        if (req.body.password !== req.body.c_password) {
            req.flash('message', "Passwords does not match.")
            return res.status(400).redirect('/reset');
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Update the user's password in the database
        req.session.otpExpiration = null
        await User.updateOne({ email: req.session.email }, { $set: { password: hashedPassword, otp: null } })
        await user.save();
        // Clear/reset OTP from session
        // delete req.session.resetOTP;

        await user.save();

        // res.send('Password reset successful');
        req.flash('message', 'Password reseted successfully')
        res.redirect('/')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




// server start
app.listen(3001, () => {
    console.log('http://localhost:3001');
})



