module.exports = {
    checkForSession: (req,res,next) =>{
        if(!req.session.user){
            req.session.user = {username: "newuser", id:null}
            console.log(req.session, "req.session information")
        }
        next()
    },



}
