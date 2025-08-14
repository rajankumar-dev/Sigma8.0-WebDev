const express = require("express");
const app = express();
const path = require("path");
const {v4: uuidv4} = require("uuid");

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

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
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show", {post});
});

