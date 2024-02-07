let per: [string, number, boolean] = ["mario", 30, true];
//tupleexamples

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [950, 539];

function useCoords(): [number, number] {
  //get coords
  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

//namedtuples
let ur: [name: string, age: number];
ur = ["peach", 35];
console.log(ur[0])
