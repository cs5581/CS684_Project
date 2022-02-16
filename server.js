const express = require('express')
const mysql = require('mysql')
const session = require('express-session')


const path = require('path')
const bodyParser = require('body-parser')
const exp = require('constants')
const { pathToFileURL } = require('url')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

const app = express()



app.use(express.json())

app.use(express.urlencoded({extended: true}))



app.set('view engine','ejs')

var myArray = [];

//for decoding info in the URL. false chooses the querystring library
app.use(bodyParser.urlencoded({extended:false}))


//set up a route for requests (main: get post put delete)

app.get('/',function(request,response) {
    // response.sendStatus(500)
    // response.send("SEND THIS DOWN")
    // response.download("server.js")
    // response.json({"its a me": "mario"})

    response.render('index', {text: "MYUSERNAME"})

    

})



app.post('/',function(request,response) {
    response.send('create New user')


})

app.get('/login',function(request,response) {
    response.render('loginPage')
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

app.get('/index',function(request,response) {
    response.render('index')
})

app.get('/:id',function(request,response) {
    response.send("get the id parameter" + request.params.id)

})



app.listen(3000)



