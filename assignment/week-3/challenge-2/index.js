const express = require('express');
const path = require('path');
const app = express();
const {v4:uuidv4} = require('uuid');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

const port = 8080;

//Data For Home Page
let posts = [
    {
        id:uuidv4(),
        username:"rajan kumar",
        content:"Jai Mata Di"
    },
    {
        id:uuidv4(),
        username:"rahul kumar",
        content:"Jai Mata Di"
    },
    {
        id:uuidv4(),
        username:"raju kumar",
        content:"Jai Mata Di"
    }
];

//Home Route
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});
//Add Route
app.get("/posts/new", (req, res) => {
    res.render("new");
});
app.post("/posts",(req, res) => {
    let {username ,content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.render("/posts");
})
//Update Route
app.listen(port, () => {
    console.log("Server is listing",port);
});