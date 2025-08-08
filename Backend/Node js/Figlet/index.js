const figlet = require("figlet");

figlet("RajanKumar", (err, data) =>{
    if(err){
        console.log("Error Occured");
        console.dir(err);
        return;
    }
    console.log(data);
});