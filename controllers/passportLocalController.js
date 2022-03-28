const passport = require('passport')
const passportLocal = require('passport-local')
const loginService = require('../services/loginService')


let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = ()=>{
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req,username,password,done)=>{
        try{
            //check if username and password match
            let user = await loginService.checkLoginCredentials(username,password);

            if(!user){
                return done(null,false,req.flash("errors","mySQL found NOTHING"))
            }

            if(user){
                return done(null,user,null);
            }


        } catch(err){
            return done(null,false,err)
        }
    }));
};

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    loginService.findUserById(id).then((user)=>{
        return done(null,user);
    }).catch(error => {
        return done(error,null)
    });
});

module.exports={
    initPassportLocal:initPassportLocal

}