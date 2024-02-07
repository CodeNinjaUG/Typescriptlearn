"use strict";
///anytype
let lage;
lage = 30;
lage = false;
let title;
title = 35;
title = {
    hello: "world",
};
///
let anythings = ["hello", true, 40, null];
anythings.push({ lid: 43 });
//anytype in arrays
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);
