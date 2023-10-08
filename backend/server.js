//initialize top level of endpoints - the actual express server
const express = require("express");
const app = express();
const port = 3009;

//initialize routers that contain the routes from other js files
var accountRoutes = require("./routes/account.js");
var characterRoutes = require("./routes/characters.js");

//initialize mysql2 module connection
const mysql = require("mysql2");
var connection = mysql.createConnection(
    {
        host    :   'localhost',
        user    :   'root',
        password:   'zenithdiedagainthissession',
        database:   'db',
        insecureauth:true
    }
);

//connect the express server to the routers for the other endpoints
app.use("/account", accountRoutes);
app.use("/character", characterRoutes);

//diagnostic port listener
app.listen(port, () => 
    {console.log("Listening on port " + port)}
);
