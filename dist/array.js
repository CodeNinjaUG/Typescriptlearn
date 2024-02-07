"use strict";
///arrays
let names = ["Mario", "Luigi", "PEach"];
let ages = [2, 4, 62, 69];
names.push("tuej");
ages.push(54);
///type inference with arrays
let fruits = ["apples", "pears", "bananas", "mangoes"];
fruits.push("peaches");
const f = fruits[3];
let things = [1, true, "hello"]; //uniontype
const t = things[0];
//object literals
let user = {
    fistName: 'mame',
    age: 4,
    id: 5
};
user.age = 24;
user.fistName = 'makerere';
user.id = 45;
let person = {
    name: 'akkel',
    score: 45
};
//type inference with object literals
person.name = 'ekimka';
