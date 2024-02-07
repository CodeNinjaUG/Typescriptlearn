"use strict";
//interfaces
const authorone = {
    name: "sjje",
    avatar: "/img/src/ig.png",
};
const newPost = {
    title: "my",
    body: "something interesting",
    tags: ["gmai", "jmek"],
    cteated_at: new Date(),
    author: authorone,
};
//functin as argumenttypes
function createPost(post) {
    console.log("created post", `${post.title} by ${post.author.avatar}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: "mario",
    score: 54,
};
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}}`);
}
formatUser(userOne);
formatUser({ name: "kke", score: 57 });
//uniontypes
let someid;
someid = 1;
someid = "43jafhjSFN";
let email;
email = "ena@gmail.com";
email = null;
let anotherId;
anotherId = "43rewkrewnrem";
anotherId = 4;
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idone = swapIdType(5);
const idtwo = swapIdType("ejjwe");
function logDetails(value) {
    if (value.type === "student") {
        console.log(value.email, value.email, value.id, value.type);
    }
    if (value.type === "teacher") {
        console.log(value.email, value.age, value.id, value.username);
    }
}
