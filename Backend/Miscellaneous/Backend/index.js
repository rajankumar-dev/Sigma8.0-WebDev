const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("Server Start at", port);
});

app.get("/register", (req, res) => {
    res.send("data recieved from get");
});

app.post("/register", (req, res) => {
    res.send("data recieved from post ");
});