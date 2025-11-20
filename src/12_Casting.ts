// Casting is the process of overriding a type
// Casting with as
let x: unknown = "hello";
console.log((x as string).length);

// Casting with <>
// This type of casting will not work with tsx, such as when working on React files
let y: unknown = "Yellow";
console.log((<string>y).length);

// Force casting
// To override the errors that TS might throw when casting, first cast to unknown then to the desired type
let z = 3;
console.log(((z as unknown) as string).length);