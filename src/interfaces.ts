//interfaces

interface Author {
  name: string;
  avatar: string;
}

const authorone: Author = {
  name: "sjje",
  avatar: "/img/src/ig.png",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  cteated_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my",
  body: "something interesting",
  tags: ["gmai", "jmek"],
  cteated_at: new Date(),
  author: authorone,
};

//functin as argumenttypes
function createPost(post: Post): void {
  console.log("created post", `${post.title} by ${post.author.avatar}`);
}
createPost(newPost);

let posts: Post[] = [];
posts.push(newPost);

//type aliases
type RGBA = [number, number, number];
function getRandomColor(): RGBA {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

//type describing an object
type User = {
  name: string;
  score: number;
};

const userOne: User = {
  name: "mario",
  score: 54,
};

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}}`);
}

formatUser(userOne);
formatUser({ name: "kke", score: 57 });

//uniontypes

let someid: number | string;
someid = 1;
someid = "43jafhjSFN";

let email: string | null;
email = "ena@gmail.com";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "43rewkrewnrem";
anotherId = 4;

function swapIdType(id: Id) {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idone = swapIdType(5);
const idtwo = swapIdType("ejjwe");

interface Student {
  type: "student";
  username: string;
  email: string;
  id: Id;
}

interface Teacher {
  type: "teacher";
  username: string;
  email: string;
  id: Id;
  age: number;
}
function logDetails(value: Teacher | Student): void {
  if (value.type === "student") {
    console.log(value.email, value.email, value.id, value.type);
  }
  if (value.type === "teacher") {
    console.log(value.email, value.age, value.id, value.username);
  }
}
