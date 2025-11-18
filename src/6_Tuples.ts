// A tuple is a types array with pre-defined length and types for each index
let ourTuple: [string, number, boolean] = ["Jlow", 57, true];
console.log((ourTuple));

// Named tuples:
// Named tuples allow us to provide context for our values at each index
const graph: [x: number, y: number] = [3.4, 8.9];
console.log(graph);

// Destructuring tuples
const graph2: [number, number] = [3.4, 8.9];
const [x, y] = graph2;
console.log(x,y);