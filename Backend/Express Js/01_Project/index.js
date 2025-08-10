const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () =>{
    console.log("app is listen on localhost:",port);
});

//Express Routs
app.get("/", (req, res)=>{
    res.send("YOu Enter the root path")
});
app.get("/help", (req, res)=>{
    res.send("YOu Enter the root help");
});
app.get("/apple", (req, res)=>{
    res.send("YOu Enter the root apple")
});

//path parameters
app.get("/:username/:id", (req, res)=>{
    // console.log(req.params);
    // res.send(`You enter the`);
});

//Query String
app.get("/search", (req, res)=>{
    let {q} = (req.query);
    res.send(q);
});
