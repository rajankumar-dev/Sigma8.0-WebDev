const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp-2');
}

let chats = [
    {
        from:"neha",
        to: "priya",
        msg:"send me your exam sheets",
        created_at : new Date()
    },
    {
        from:"rohit",
        to: "rahul",
        msg:"send me your exam paper",
        created_at : new Date()
    },
    {
        from:"supriya",
        to: "vapriya",
        msg:"send me your exam sheets",
        created_at : new Date()
    },
    {
        from:"raju",
        to: "panda",
        msg:"send me your exam sheets",
        created_at : new Date()
    },
]

Chat.insertMany(chats);
