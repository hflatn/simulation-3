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
    const db = app.get('db')

     db.find_user([ profile.user_id ]).then( ( userbase ) => {
         if (!userbase[0]) {
             db.create_user([profile.user_id]).then((userbase) => {
                return done(null, userbase[0].user_id)
                })
            }
            else {
               return done(null, userbase[0].user_id)
            }
        })
    }
))

passport.serializeUser( (user_id, done) => { 
    console.log(user_id, "id userbase info")
    return done(null, user_id)
})

passport.deserializeUser( (user_id, done) => { 
    const db = app.get('db')
    // console.log(profile.user_id, "find user profile id")
    
    db.find_user([ user_id ]).then(( userbase ) => {
        return done(null,userbase[0].user_id)
    }) 
}
)


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/dashboard',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/api/workdatserver', controller.workdatserver);
app.patch('/api/profileInfo', controller.profileinfo);

const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Be-Booo-Booo-Bop...Server Online...Beep-Boop")})
