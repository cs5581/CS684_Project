const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const math = require('math')

const app=express()
const mysql = require('mysql')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');
const path = require('path')
const exp = require('constants')
const { pathToFileURL } = require('url')
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
const { Router } = require('express')
app.locals.moment = moment;



//import controllers
const loginController = require('../controllers/loginController')
const registerController=require('../controllers/registerController')


//import DB
// const connection=require('../configs/connectDB')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

newsr.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))

app.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))



newsr.get('/',async(req,res)=>{
    try {
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08';

        const news_get =await axios.get(url)
        console.log(news_get)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08';
        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})


    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


newsr.use(express.static('public'))
newsr.use(express.json())
newsr.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))
newsr.use(bodyParser.urlencoded({ extended: true }));



//newsr.get routes including login page
newsr.get('/aboutUs',function(request,response) {
    response.render('aboutUs')
})


newsr.get('/login',loginController.getLoginPage
)

newsr.get('/signUp',registerController.getRegisterPage
)

newsr.get('/myUsername',(req,res)=>{
    if(req.session['username']){
        res.send(req.session['username'])
    } else {
        res.send('youre not logged in')
    }
    
})

newsr.get('/myDashboard',(req,res)=>{
    res.render('myDashboard')

})


newsr.get('/mySubjects',(req,res)=>{
    var subjects = [];
    // var username = req.body['username'];
    var username = 'chris';

    connection.query('SELECT * FROM mySubjects WHERE username = ?',[username], function(error, results, fields) {
        if (error) {
            throw error
        }
        if (results.length > 0) {
            results.forEach((result)=>{
                console.log(result.subject)
            })

            const responses = results.map(({subject})=>{
                return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=c311a717afc94a8a8ee4c60a86822b08`)

            })

            var newsArray = [];

            Promise.all(responses).then((news)=>{
                //I don't know how to automate this....
                // console.log(news[0].data.articles)
                // console.log(news[1].data.articles)

                newsArray.push(news[0].data.articles)
                newsArray.push(news[1].data.articles)
                console.log(newsArray)
                return newsArray;

            }).then(()=>{
                res.status(200).send({newsArray})
            })
            
           
        //    res.render('myArticles',{articles:newsArray})

        }
        else {
            res.status(401)
            .send({message: "Nothing is here."})
            
        }
    });

})

newsr.get('/:id',function(request,response) {
    response.send("get the id parameter" + request.params.id)

})

//newsr.post 

newsr.post('/login',function(request,response) {
    let username = request.body.username;
    let password = request.body.password;
    // response.send(`username: ${request.body.username} password: ${request.body.password}`)

    if (username && password) {
        //if not null execute SQL query

        connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password], function(error, results, fields) {
            if (error) {
                throw error
            }
            if (results.length > 0) {
                //start a session
                request.session['username'] = username;
                console.log("your username is " + request.session['username'])


                response.status(200)
                .send({message: `LOG IN SUCCESS ${username}`})
                

            }
            else {
                // response.send("Incorrect Username and/or password!")
                response.status(401)
                .send({message: "Incorrect Username or password"})
                

            }
            

        });

    }         
    else {
        response.status(401)
        .send({message: "Enter a username and password!"})
        
        }

})

newsr.post('/signUp',registerController.createNewUser)

newsr.post('/mySubjects',(req,res)=>{
    //replace with current session USERNAME
    var username = req.body['username'];
    // var username = request.session['username']
    // console.log("your username is " + req.session['username'])
    var subject = req.body['subject'];

            connection.query('INSERT INTO mySubjects(username,subject) VALUES(?,?)',[username,subject],function(error,results,fields) {
                if (error) {
                    console.log(error)
                }

                res.status(200)
                .send(results)          
            }) 
})




module.exports=newsr
