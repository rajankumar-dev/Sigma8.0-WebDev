const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("welcome to homepage");
})

app.listen(port, () => {
    console.log("listening on ",port);
    
});