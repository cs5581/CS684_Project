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
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

// template engine  
app.use(express.static('public'))
app.use(express.json())
app.use(session(
    {secret: 'okie dokie',
    cookie: {maxAge: 60000
    }
}
))
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
                request.session['username'] = username;
                console.log("your username is " + request.session['username'])

                console.log("success!")

                response.status(200)
                .send({message: "Log in success!"})
                

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
                
                response.status(401)
                .send({message: "The username already exists!"})
                                
            }
            else {

                connection.query('INSERT INTO users(username,password) VALUES(?,?)',[username,password],function(error,results,fields) {
                    if (error) {
                        console.log(error)
                    }

                    response.status(200)
                    .send({message: "Successfully signed up!"})
                    
                    //start a session

                    
                })
                
            }
            // response.end();

        });

    }         
    else {
        response.status(401)
        .send({message: "Please enter username and password!"})
            }


})

    app.get('/aboutUs',function(request,response) {
    response.render('aboutUs')
})



app.get('/:id',function(request,response) {
    response.send("get the id parameter" + request.params.id)

})




app.listen(port,()=> console.log("listening on port: " + port))
