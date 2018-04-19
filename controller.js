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
    }
}
