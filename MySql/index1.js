const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:"1128"
});

app.get("/", (req,res) => {
    res.send("welcome");
})

app.listen(port, () => {
    console.log("listening on ",port);
    
});