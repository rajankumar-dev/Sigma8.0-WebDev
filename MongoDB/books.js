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
        min: [1, "Price to Low for Amazone selling"]
    },
    discount: {
        type: Number,
        default:0
    }
});

//Create a Model for Book Schema
const Book = mongoose.model("Book", bookSchema);

//update
Book.findByIdAndUpdate('68ac818781d9e8e97cf679f5',{price:-166}, {runValidators: true});
// let book1 = new Book({
//     title:"mathmatics",
//     author:"rd Sharma",
//     price: 340
// });
// let book2 = new Book({
//     title:"mathmatics",
//     author:"rd Sharma",
//     price: 340
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// book2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

