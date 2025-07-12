// Object Literals
let student = {
    name:'rajan',
    age:21,
    marks:54
}

// Thread / Twitter Post
let post = {
    username:'@rajan09',
    content:'this is my #firstPost',
    likes:139,
    repost:4,
    tags:['apnacollege','Delta','Shobhit University']
}
console.log(post["likes"]);
console.log(post.repost);

// Add new Property in Exiting Object
post.city = 'mumbai';
console.log(post);

//Random No.
let num = Math.floor( Math.random() * 10) +1 ;
