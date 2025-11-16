var _a;
// 1. Boolean
var isActive = true;
var hasPermission = false; // TS infers 'boolean' type
// 2. Number
var decimal = 6;
var hex = 0xf00d; // Hexadecimal
var binary = 10; // Binary
var octal = 484; // Octal
var float = 3.14; // Floating point
// 3. String
var color = "blue";
var fullName = 'John Doe';
var age = 30;
var sentence = "Hello, my name is ".concat(fullName, " and I'll be ").concat(age + 1, " next year.");
// 4. BigInt (ES2020+)
// Represents whole numbers larger than 253 - 1.
// Use the n suffix to create a bigint.
var bigNumber = 9007199254740991n;
var hugeNumber = BigInt(9007199254740991); // Alternative syntax
// 5. Symbol
// Creates unique identifiers
// Useful for creating unique property keys and constants
var uniqueColor = Symbol('mlue');
var obj = (_a = {},
    _a[uniqueColor] = color,
    _a);
console.log(obj[uniqueColor]);
