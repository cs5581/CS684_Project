let getLoginPage = (req,res)=>{
    
        res.render('login')
        console.log("loginPage");
    


}

module.exports={
    getLoginPage: getLoginPage
}