const express = require("express");
const router = express.Router();
const dictionary = require("../definitions.js");


//login function
//  frontend sends http get request with json body:
//      email
//      password
//  backend should query database with:
//      select accountID from account where (email = req.body.email) and (password = req.body.password);
//  database should return:
//      accountID
//  frontend should receive:
//      accountID
router.get('/login', (req, res) =>
    {
        if(req.body == null){
            res.send("Invalid credentials.");
        }
        // var reqEmail = reqBody.email;
        // var reqPassword = reqBody.password;
        
        connection.query('select accountID from account where email = ' + req.body.email + ' and password = ' + req.body.password + ';',
        (error, results, fields) =>
        {
            if(error) throw error;
            console.log(results);
            console.log(fields);
            res.json(results);
        })
    }
);

//account create function
//  frontend sends http post request with json body:
//      name
//      email
//      password
//  backend should insert database with:
//      insert into account values (name, email, password);
router.get('/create', (req, res) =>
    {
        connection.query('insert into account values (' + req.name + ', ' + req.email, + ', ' + req.password + ';',
        (error, results, fields) =>
            {if(error) throw error;}
        )
    }
);

module.exports = router;