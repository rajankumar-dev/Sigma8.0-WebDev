const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () =>{
    console.log("app is listen on localhost:",port);
});
app.use((req, res) => {
    console.log("recieved");
    res.send("response")
});