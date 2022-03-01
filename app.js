const express = require('express')
const app=express()
const mysql = require('mysql')
const session = require('express-session')

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');

const path = require('path')
const exp = require('constants')
const { pathToFileURL } = require('url')


const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;


//Connection to DB
const connection = mysql.createConnection({
    host: 'https://web.njit.edu/mysql/phpMyAdmin/index.php?token=c6467e6e65aa6976fbce5543e0ef945b#PMAURL-24:prefs_manage.php?db=&table=&server=1&target=&token=c6467e6e65aa6976fbce5543e0ef945b',
    user: 'cs558@webhost01.arcs.njit.edu',
    password: 'CpuCrusher18$',
    database: 'Users'
})

// template engine  
app.use(express.static('public'))
app.use(express.json())
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))

app.set('views','./views')

//edits that might fail
app.get('/login',function(request,response) {
    response.render('login')
    console.log("loginPage");


})

    app.post('/login',function(request,response) {
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
                console.log("success!")
                response.render('dashboard')
                
            }
            else {
                response.send("Incorrect Username and/or password!")

            }
            response.end();

        });

    }         
    else {
        respond.send("Please enter Username and Password")
    }

})

    app.get('/signUp',function(request,response) {
    response.render('signUp')
})

app.post('/signUp',function(request,response){
    let username = request.body.username;
    let password = request.body.password;

    if (username && password) {

        connection.query('SELECT * FROM users WHERE username = ?',username, function(error, results, fields) {
            if (error) {
                throw error
            }
            if (results.length > 0) {
                
                response.send("the username already exists. Pick another one. ")
                
            }
            else {

                connection.query('INSERT INTO users(username,password) VALUES(?,?)',[username,password],function(error,results,fields) {
                    if (error) {
                        throw error
                    }

                    console.log(results)

                    response.send("You successfully signed up!")

                    //start a session

                    
                })
                
            }
            response.end();

        });

    }         
    else {
        response.send("Please enter Username and Password")
    }


})

    app.get('/aboutUs',function(request,response) {
    response.render('aboutUs')
})



app.get('/:id',function(request,response) {
    response.send("get the id parameter" + request.params.id)

})




app.listen(port,()=> console.log("listening on port: " + port))