const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
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


module.exports=newsr