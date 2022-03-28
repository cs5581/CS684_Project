const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'overalls',
    database: 'usersDB'
})

let findUserById = (id)=>{
    return new Promise((resolve,reject)=>{
        try{
            connection.query("SELECT * from users where id = ?",[id],function(error,results){
                if (error) reject (error);

                let user = results[0];
                resolve(user);
            })

        }catch(e){
            reject(e);
        }
    });

};


let checkLoginCredentials = (username,password)=>{
    return new Promise(((resolve,reject)=>{
        try{
            // response.send(`username: ${request.body.username} password: ${request.body.password}`)
        
            if (username && password) {
                //if not null execute SQL query
        
                connection.query('SELECT * FROM users WHERE username = ? AND password = ?',[username,password], function(error, results, fields) {
                    if (error) {
                        reject(error);
                    }
                    if (results.length > 0) {
                        let user = results[0];
                        resolve(user)     
                    }
                    else {
                        console.log("incorrect username and password")
                    }
                    
        
                });
        
            }         
            else {
                console.log("enter username and password")      
                }

        }catch (e){
            reject(e);

        }

    }));
    //return new promise
};


module.exports={
    checkLoginCredentials: checkLoginCredentials,
    findUserById: findUserById
}