const User = require('../models/user');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp); 

 describe('/First Test Collection', () =>{
//     it('test default API welcome route...', (done) =>{
//         chai.request(app)
//         .get('/')
//         .end((err,res) => {
//             res.should.have.status(200);
//             done();
//         });
//     });


    it('GET Landing page of application', (done) => {
        
        chai.request(app)
        .get('/') 
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('GET all users from the DB', (done) => {
        chai.request(app)
        .get('/api/Users')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.length.should.not.be.eql(0);
            done();
        });
    });

    it('GET Register ', (done) => {
        chai.request(app)
        .get('/users/register')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('POST a valid user details to DB - REGISTER', (done) => {
        let User = {
            name: "",
            email: "",
            password: "",
            password2: ""
        }
        
        chai.request(app)
        .post('/users/register')
        .send(User)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    it('GET Login ', (done) => {
        chai.request(app)
        .get('/users/login')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });

    
    it('POST user details for Login to Application', (done) => {
        let User = {
            email: "",
            password: ""
        }
       
       chai.request(app)
       .post('/users/login') //add valid ID here
       .send(User)
       .end((err, res) => {
           res.should.have.status(200);
           done();
       });
   });

   it('GET user landing - Dashboard', (done) => {
    let User = {
        _id: "6234c1e0e5fe2e6ad72245f7", //add valid ID here
    }    
    chai.request(app)
    .get('/dashboard') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
  });
});

   it('GET Specific user details', (done) => {
    let User = {
        _id: "6234c1e0e5fe2e6ad72245f7", //add valid ID here
    }    
    chai.request(app)
    .get('/api/Users') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
});

   it('UPDATE user details in DB', (done) => {
    let User = {
        _id: "6234c1e0e5fe2e6ad72245f7", //add valid ID here
        general: "no"
    }
   
   chai.request(app)
   .put('/api/users/6234c1e0e5fe2e6ad72245f7') //add valid ID here
   .send(User)
   .end((err, res) => {
       res.should.have.status(200);
       done();
   });
}); 

    it('Logout from the Application', (done) => {
         let User = {
             _id: "6234c1e0e5fe2e6ad72245f7", //add valid ID here
         }    
    chai.request(app)
    .get('/users/logout') 
    .send(User)
    .end((err, res) => {
        res.should.have.status(200);
        done();
    });
    });

})