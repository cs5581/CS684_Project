let getHomePage = async(req,res)=>{

    try {
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c311a717afc94a8a8ee4c60a86822b08';

        const news_get =await axios.get(url)
        console.log(news_get)
        return res.render('news',{articles:news_get.data.articles
            // user:req.user
        })

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }

};


module.exports={
    getHomePage:getHomePage
}