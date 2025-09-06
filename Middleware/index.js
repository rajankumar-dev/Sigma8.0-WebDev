const express = require("express");
const app = express();

//Simple Middleware
app.use( (req,res,next) => {
    console.log("I am middleware");
    next();
});

//Next Middleware
app.use((req,res,next) =>{
    console.log("Middleware first");
    next();
})
app.use((req,res,next) =>{
    console.log("Middleware second");
    next();
})
app.get("/" , (req, res) => {
    res.send("I am Root");
})
app.get("/random" , (req, res) => {
    res.send("this is random page");
})

app.listen(3000, () => {
    console.log("Server is listening on 3000");
})