const express = require('express')
const app=express()

// require('dotenv').config();




























const mysql = require('mysql')
const session = require('express-session')
const axios = require('axios')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');
const path = require('path')
const exp = require('constants')
const { pathToFileURL } = require('url')
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})
app.use(express.static('public'))
app.use(express.json())
app.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine','ejs')
app.use('/',require('./routes/news'))
app.set('views','./views')

//edits that might fail
// app.get('/login',function(request,response) {
//     response.render('login')
//     console.log("loginPage");


// })

// app.get('/signUp',function(request,response) {
//     response.render('signUp')
// })


// app.get('/myUsername',(req,res)=>{
//     if(req.session['username']){
//         res.send(req.session['username'])
//     } else {
//         res.send('youre not logged in')
//     }
    
// })

// app.get('/myDashboard',(req,res)=>{
//     res.render('myDashboard')

// })



// app.get('/mySubjects',(req,res)=>{
//     var subjects = [];
//     var username = req.body['username'];

//     connection.query('SELECT * FROM mySubjects WHERE username = ?',[username], function(error, results, fields) {
//         if (error) {
//             throw error
//         }
//         if (results.length > 0) {
//             results.forEach((result)=>{
//                 console.log(result.subject)
//             })

//             const responses = results.map(({subject})=>{
//                 return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subject}&apiKey=c311a717afc94a8a8ee4c60a86822b08`)

//             })

//             var newsArray = [];


//             Promise.all(responses).then((news)=>{
//                 //I don't know how to automate this....
//                 // console.log(news[0].data.articles)
//                 // console.log(news[1].data.articles)

//                 newsArray.push(news[0].data.articles)
//                 newsArray.push(news[1].data.articles)
//                 console.log(newsArray)
//                 return newsArray;

//             })
            
//            res.status(200).send({results})
//         //    res.render('myArticles',{articles:newsArray})

//         }
//         else {
//             res.status(401)
//             .send({message: "Nothing is here."})
            
//         }
//     });


// })

// app.post('/mySubjects',(req,res)=>{
//     //replace with current session USERNAME
//     var username = req.body['username'];
//     // var username = request.session['username']
//     // console.log("your username is " + req.session['username'])
//     var subject = req.body['subject'];


//             connection.query('INSERT INTO mySubjects(username,subject) VALUES(?,?)',[username,subject],function(error,results,fields) {
//                 if (error) {
//                     console.log(error)
//                 }

  
//                 res.status(200)
//                 .send(results)
                
                
//             })
            
// })





// app.post('/login',function(request,response) {
//     let username = request.body.username;
//     let password = request.body.password;
//     // response.send(`username: ${request.body.username} password: ${request.body.password}`)

//     if (username && password) {
//         //if not null execute SQL query

//         connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password], function(error, results, fields) {
//             if (error) {
//                 throw error
//             }
//             if (results.length > 0) {
//                 //start a session
//                 request.session['username'] = username;
//                 console.log("your username is " + request.session['username'])


//                 response.status(200)
//                 .send({message: `LOG IN SUCCESS ${username}`})
                

//             }
//             else {
//                 // response.send("Incorrect Username and/or password!")
//                 response.status(401)
//                 .send({message: "Incorrect Username or password"})
                

//             }
            

//         });

//     }         
//     else {
//         response.status(401)
//         .send({message: "Enter a username and password!"})
        
//         }

// })

//     app.get('/signUp',function(request,response) {
//     response.render('signUp')
// })

// app.post('/signUp',function(request,response){
//     let username = request.body.username;
//     let password = request.body.password;

//     if (username && password) {

//         connection.query('SELECT * FROM users WHERE username = ?',username, function(error, results, fields) {
//             if (error) {
//                 throw error
//             }
//             if (results.length > 0) {
                
//                 response.status(401)
//                 .send({message: "The username already exists!"})
                                
//             }
//             else {

//                 connection.query('INSERT INTO users(username,password) VALUES(?,?)',[username,password],function(error,results,fields) {
//                     if (error) {
//                         console.log(error)
//                     }

//                     request.session['username'] = username;
//                     // console.log("your username is " + request.session['username'])
    

//                     response.status(200)
//                     .send({message: "Successfully signed up! Your username is " + request.session['username']})
                    
//                     //start a session

                    
//                 })
                
//             }
//             // response.end();

//         });

//     }         
//     else {
//         response.status(401)
//         .send({message: "Please enter username and password!"})
//             }


// })

//     app.get('/aboutUs',function(request,response) {
//     response.render('aboutUs')
// })



// app.get('/:id',function(request,response) {
//     response.send("get the id parameter" + request.params.id)

// })




app.listen(port,()=> console.log("listening on port: " + port))
