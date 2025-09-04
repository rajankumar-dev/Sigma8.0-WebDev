const express = require("express");
const app = express();

app.use( () => {
    console.log("I am middleware");
});

app.get("/" , (req, res) => {
    res.send("I am Root");
})
app.get("/random" , (req, res) => {
    res.send("this is random page");
})


app.listen(3000, () => {
    console.log("Server is listening on 8080");
})