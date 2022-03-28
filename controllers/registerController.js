



let getRegisterPage = (req,res)=>{
    res.render('signUp')

    
}

let createNewUser = (req,res)=>{
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

                    request.session['username'] = username;
                    // console.log("your username is " + request.session['username'])
    

                    response.status(200)
                    .send({message: "Successfully signed up! Your username is " + request.session['username']})
                    
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




}

module.exports={
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
}