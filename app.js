const express = require('express');
const app=express()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport')
const path = require('path');
const port=8001;
const moment = require('moment')
app.locals.moment = moment;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//middleware setup
app.use(session({
    secret: 'W$q4=25*8%v-}UV',
    resave: true,
    saveUninitialized: true
}));

//passport setup 
app.use(passport.initialize());
app.use(passport.session());


//setup for static resources
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views','/Users/b002055/Documents/GitHub/CS684_Project/views')

require('./routes/news')(app, passport);




app.listen(port, () => console.log(`Server is running on port ${port}`));