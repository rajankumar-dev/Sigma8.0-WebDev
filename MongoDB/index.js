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

//Create a model
const User = mongoose.model('User', userSchema);

//Create one new user
const user3 = new User({
    name: 'John Doe',
    age: 30,
    email: 'rajankabi9@gmail.com'
});
//Create one new user
User.insertMany([
    {
        name: 'lan Doe',
        age: 30,
        email: 'afdfasfd@gmail.com'
    },
    {
        name: 'afdf Doe',
        age: 30,
        email: 'kajy@gmail.com'
    },
    {
        name: 'laas Doe',
        age: 30,
        email: 'rjdfklfadhf@gmail.com'
    }
]).then((res) => {
    console.log(res);
})
//Save the user to the database
user3.save().then((res) => console.log(res))
.catch(err => console.log(err));