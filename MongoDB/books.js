const mongoose = require('mongoose');

//Crete a connection to MongoDB
main().then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

//Schema for book
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
    },
    price: {
        type: Number,
    }
});

//Create a Model for Book Schema
const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title:"mathmatics",
    author:"rd Sharma",
    price: 340
});
let book2 = new Book({
    title:"mathmatics",
    author:"rd Sharma",
    price: 340
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    
})
book2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    
})

