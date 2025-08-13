const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username:"rajan kumar",
        content:"Jai Mata Di"
    },
    {
        username:"rahul kumar",
        content:"Jai Mata Di"
    },
    {
        username:"raju kumar",
        content:"Jai Mata Di"
    }
];

app.listen(port, () => {
    console.log("Listen on port :", port);
});

app.get("/posts", (req, res) => {
    res.render("index", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});
app.post("/posts", (req, res) => {
    res.send("post req working");
    console.log(req.body);
    
});