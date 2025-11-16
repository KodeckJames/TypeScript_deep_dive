// 1.Basic Explicit Types
// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Functions with Explicit Types
function greet(name: string): string {
    return `Hello ${name}`
}
greet("JJ");

// 2. Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its initial value:
// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
    return a+b
}
add(3, 9);

// Object Literal inference
const user = {
    name: "Klow",
    age: 60,
    isAdmin: true
}
console.log(user.age);

// Explicit type Mismatch
let username2: string = "alice";
// username2 = 42;  Error: Type 'number' is not assignable to type 'string'

// JS behavior
// function add2(a, b) {
//     return a+b
// }
// console.log(add2("3", "5"));

// TypeScript catches these issues at compile time:
function add2(a:number, b:number):number {
    return a+b
}
console.log(add2(3, 5));

// Common cases for type any:
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{"name":"Yolo", "age":"70"}')
console.log(data);

// 2. Variables declared without initialization
let something;
something = 49;
something = "Yes Yes";
