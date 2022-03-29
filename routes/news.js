const LocalStrategy = require('passport-local').Strategy;
const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const app=express()
const moment = require('moment')
const exp = require('constants')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');
const mysql = require('mysql')

const math = require('math')
const { Router, response } = require('express')
const path = require('path');


app.locals.moment = moment;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});


module.exports = function(app, passport) {


    app.get('/', 
    async(req,res)=>{


        try {
            var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08';
    
            const news_get =await axios.get(url)
            // console.log(news_get.data.articles)
            
            res.render('news'
            ,{username:req.user,articles:news_get.data.articles}
            )
    
        } catch (error) {
            if(error.response){
                console.log(error)
            }
    
        }
    });
    app.get('/myDashboard', isLoggedIn, async (req, res) => {
        var newsArray = [];
        var username = req.user.username;

        connection.query('SELECT * FROM mySubjects WHERE username = ?',[username],function(error,results,fields){
            if(error) {throw error}
            if(results.length>0){
                // console.log(results)
                const responses = results.map(({subject})=>{
                    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=c311a717afc94a8a8ee4c60a86822b08`)

                })

                Promise.all(responses).then((response)=>{
                    newsArray.push(response[0].data.articles)
                    console.log(newsArray);

                })
                

            } else{
                console.log("theres nothing here")
            }
        })

        try {
            var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08';
    
            const news_get =await axios.get(url)
            // console.log(news_get.data.articles)
            
            res.render('myDashboard'
            ,{username:req.user,articles:news_get.data.articles}
            )
    
        } catch (error) {
            if(error.response){
                console.log(error)
            }
    
        }
    

        // res.render('myDashboard',{username:req.user});
    });

    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    app.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/myDashboard'
    }));

    passport.use(new LocalStrategy(
        (username, password, done) => 

        {
            if(username && password) {

                connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password],function(error,results,fields){
                    if(error){throw error}
                    if(results.length>0){
                        console.log('you GOT LOGGED IN!')
                        return done(null, {username: username});
                    } else{
                        console.log('INVALID USERNAME PASSWORD')
                        return done(null, false);
                    }


                })


                // return done(null, {username: username});
            } else {


                // return done(null, false);
            }
        }
        
        
        // {
        //     if(username === 'test@gmail.com' && password === '1234') {
        //         return done(null, {username: 'test@gmail.com'});
        //     } else {
        //         return done(null, false);
        //     }
        // }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        done(null, {username: username});
    }); 

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        } else {
            return res.redirect('/login');
        }
    }






    app.get('/aboutUs',function(request,response) {
        response.render('aboutUs')
    })

    app.get('/signUp',function(request,response) {
        response.render('signUp')
    })

}