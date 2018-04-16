const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const controller = require('./controller.js');

require('dotenv').config()

const app = express();

app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then ( db =>
    { console.log("database connected")
    app.set('db', db);
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID:process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
},  
 function(acessToken, refreshToken, extraParams, profile, done){
     console.log(profile, "profileinfo")
     done(null, profile);
    }
))

passport.serializeUser( (profile, done) => { 
    done(null, profile)
})

passport.deserializeUser( (profile, done) => { 
    done(null, profile)
})

app.use(controller.checkForSession)
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    
    

    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}))


const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Be-Booo-Booo-Bop...Server Online...Beep-Boop")})

