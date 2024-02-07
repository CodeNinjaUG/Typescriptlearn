"use strict";
let per = ["mario", 30, true];
//tupleexamples
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [950, 539];
function useCoords() {
    //get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//namedtuples
let ur;
ur = ["peach", 35];
console.log(ur[0]);
