const express = require("express");
const app = express();

app.use((req,res,next) => {

    console.log(req.event);
    next();
});

app.get("/", (req, res) => {
    console.log("I am root");
})

app.listen(8080, () => {
    console.log("listening on 8080");
});