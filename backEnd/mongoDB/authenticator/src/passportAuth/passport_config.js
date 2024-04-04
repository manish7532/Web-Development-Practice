const { User } = require('../model/userSchema')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');

passport.use(new localStrategy({ usernameField: 'email', passReqToCallback: true }, async (req, email, password, done) => {
    try {
        const thatUser = await User.findOne({ email: email });
        if (!thatUser) {
            console.log('Wrong credentials');
            req.flash('message',"*Wrong credentials")
            return done(null, false, { message: 'Wrong credentials' });
        }
        // if (password !== thatUser.password) {
        //     console.log('Wrong Password');
        //     req.session.message = "*Wrong Password"
        //     return done(null, false, { message: 'Wrong Password' });
        // }
        const isMatch = await bcrypt.compare(password, thatUser.password);
        if (!isMatch) {
            console.log('Wrong Password');
            req.flash('message',"*Wrong Password");
            return done(null, false, { message: 'Wrong Password' });
        }

        if(thatUser.state === false){
            console.log("You are blocked, Please contact admintration");
            req.flash('message',"*You are blocked, Please contact admintration")
            return done(null ,false, {message: 'You are blocked, Please contact admintration'})
        }

        return done(null, thatUser);
    } catch (error) {
        return done(error);
    }
}));


passport.serializeUser((thatUser, done) => {
    done(null, thatUser.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const thatUser = await User.findById(id);
        if (!thatUser) {
            return done(null, false);
        }
        return done(null, thatUser);
    } catch (error) {
        return done(error);
    }
});
