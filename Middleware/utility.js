const express = require("express");
const app = express();

app.use((req,res,next) => {
    // console.log(req.event);
    next();
});

app.get("/", (req, res) => {
    console.log("I am root");
})

//API token as Query String
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        res.send("access denied");
    }
}

// API Request
app.get("/api", checkToken, (req, res) => {
    res.send("Data");
})



app.listen(8080, () => {
    console.log("listening on 8080");
});