///anytype
let lage: any;
lage = 30;
lage = false;

let title;
title = 35;
title = {
  hello: "world",
};
///
let anythings: any[] = ["hello", true, 40, null];
anythings.push({ lid: 43 });
//anytype in arrays

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(3)
