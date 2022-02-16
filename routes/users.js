const express = require('express')
const router = express.Router()

var app = express();

router.set('view engine','ejs')


router.get('/users',function(request,response) {
    response.render('loginPage')



})

router.get('/users/new',function(request,response) {
    response.render('newUser')


})

module.exports = router