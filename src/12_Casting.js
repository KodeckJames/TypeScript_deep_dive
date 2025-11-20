// Casting is the process of overriding a type
// Casting with as
var x = "hello";
console.log(x.length);
// Casting with <>
// This type of casting will not work with tsx, such as when working on React files
var y = "Yellow";
console.log(y.length);
// Force casting
// To override the errors that TS might throw when casting, first cast to unknown then to the desired type
var z = 3;
console.log(z.length);
