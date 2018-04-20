module.exports = {
    
    

    workdatserver: ( req, res, next ) => {
        const db = req.app.get('db');
        console.log( req.session, "werkdat server req.session")
        db.work_dat_server([ req.session.passport.user ])
        .then(( userbase ) => {
            res.status(200).send(userbase)
        })
        .catch((err) => {
            (console.log(err, "werkdatserver error"))
            res.status(500).send()
        })
    },

    profileinfo: ( req, res, next ) => {
        const db = req.app.get('db');
        const { first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring } = req.body

        db.update_profile([ first_namestring, last_namestring, genderstring, hair_colorstring,eye_colorstring, hobbystring, birthday_daystring, birthday_monthstring, birthday_yearstring, req.session.passport.user ])
            .then(() => res.status(200).send("infoupdated"))
            .catch((err) => {
                (console.log(err, "profileinfo error"))
                res.status(500).send()
            })
    },

    friendo: ( req, res, next ) => {
        const db = req.app.get('db');
        console.log(req.params.pg, "pg number")

        db.all_friend([ req.params.pg ])
        .then(( friends ) => res.status(200).send(friends))
        .catch((err) => {
            (console.log(err, "grab friendo error"))
            res.status(500).send()
        })
    }
}
