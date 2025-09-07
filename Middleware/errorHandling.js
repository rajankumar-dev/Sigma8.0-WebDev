const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();

app.get("/", (req, res) => {
    console.log("I am root");
})

//API token as Query String
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied");
    
}
// API Request
app.get("/api", checkToken, (req, res) => {
    res.send("Data");
})

// Custom error Route
app.get("/err",(req, res) => {
    abcd =abcd;
})
app.use((err, req, res, next) => {
    let { status = 500 , message = "some Error Occurred"} = err;
    res.status(status).send(message);
})

// Activiy --> Admin Route
app.get("/admin", (req, res) => {
    // res.status(403).send("Access Denied");
    throw new ExpressError(403, "Access-Denied");
})

app.listen(8080, () => {
    console.log("listening on 8080");
});