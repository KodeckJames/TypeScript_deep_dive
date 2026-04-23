// 1. any
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// 2. unknown
// The unknown type is a type-safe counterpart of any.
// It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".

// When to use unknown:
// When working with data from external sources (APIs, user input, etc.)
// When you want to ensure type safety while still allowing flexibility
// When migrating from JavaScript to TypeScript in a type-safe way
function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}
processValue("Yellow");
processValue([10, 90, 88]);

// never
// The never type represents the type of values that never occur.
// It's used to indicate that something never happens or should never happen.
// Functions that never return (always throw an error or enter an infinite loop)
// Type guards that never pass type checking
// Exhaustiveness checking in discriminated unions

// Examples of never in action:
// 1. Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}

// 2. Exhaustiveness checking with discriminated unions
// type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case 'circle':
//       return Math.PI * shape.radius ** 2;
//     case 'square':
//       return shape.sideLength ** 2;
//     default:
//       // TypeScript knows this should never happen
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }

// 3. Basic never type (throws error when assigned)
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// 4. Type: undefined & null
// Basic Usage
let y: undefined = undefined;
let z: null = null;

// 5. Optional Parameters and Properties
// Optional param, (implicitly `string | undefined`)
function greet2(name?: string) {
    return `Helllo ${name}`
}
greet2()

// Optional property in an interface
interface User{
    name: string;
    age?: number;
}

// Nullish Coalescing and Optional Chaining
// Nullish coalescing (??) - It gives a default value only if the left side is null or undefined.
// const username = null;
// console.log(username ?? "Guest");
// Example explanation (my thinking) = username exists? If yes, return username, if no, return Guest
// ✅ Output:
// Guest
// Meaning:
// “If username is null/undefined, use Guest.”

// Optional chaining (?.) - It lets you safely access a property without causing an error if something is null or undefined.
// const user = {
//   profile: {
//     email: "test@gmail.com"
//   }
// };

// console.log(user?.profile?.email);