"use strict";
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(4, 5);
subtractTwoNumbers(8, 8);
function addallnumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    return total;
}
addallnumbers([5, 5, 42, 4, 24]);
//teturn type inference
function formatGreeting(name, greeting) {
    return `${greeting},${name}`;
}
const result = formatGreeting("mario", "helo");
