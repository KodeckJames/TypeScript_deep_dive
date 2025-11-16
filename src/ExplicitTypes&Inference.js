// 1.Basic Explicit Types
// String
var greeting = "Hello, TypeScript!";
// Number
var userCount = 42;
// Boolean
var isLoading = true;
// Array of numbers
var scores = [100, 95, 98];
// Functions with Explicit Types
function greet(name) {
    return "Hello ".concat(name);
}
greet("JJ");
// 2. Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its initial value:
// TypeScript infers 'string'
var username = "alice";
// TypeScript infers 'number'
var score = 100;
// TypeScript infers 'boolean[]'
var flags = [true, false, true];
// TypeScript infers return type as 'number'
function add(a, b) {
    return a + b;
}
add(3, 9);
// Object Literal inference
var user = {
    name: "Klow",
    age: 60,
    isAdmin: true
};
console.log(user.age);
// Explicit type Mismatch
var username2 = "alice";
// username2 = 42;  Error: Type 'number' is not assignable to type 'string'
// JS behavior
// function add2(a, b) {
//     return a+b
// }
// console.log(add2("3", "5"));
// TypeScript catches these issues at compile time:
function add2(a, b) {
    return a + b;
}
console.log(add2(3, 5));
// Common cases for type any:
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
var data = JSON.parse('{"name":"Yolo", "age":"70"}');
console.log(data);
var data2 = {
    name: "Jimbo",
    age: 77,
    isAdmin: false
};
console.log(JSON.stringify(data2));
// 2. Variables declared without initialization
var something;
something = 49;
something = "Yes Yes";
