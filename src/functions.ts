function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};
addTwoNumbers(4, 5);
subtractTwoNumbers(8, 8);

function addallnumbers(items: number[]): number {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
  return total;
}

addallnumbers([5, 5, 42, 4, 24]);

//teturn type inference

function formatGreeting(name: string, greeting: string) {
  return `${greeting},${name}`;
}

const result = formatGreeting("mario", "helo");
