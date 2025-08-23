const mongoose = require('mongoose');

//Crete a connection to MongoDB
main().then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Create a schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

