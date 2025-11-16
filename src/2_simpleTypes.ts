// 1. Boolean
let isActive: boolean = true;
let hasPermission = false; // TS infers 'boolean' type

// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point

// 3. String
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

// 4. BigInt (ES2020+)
// Represents whole numbers larger than 253 - 1.
// Use the n suffix to create a bigint.
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax

// 5. Symbol
// Creates unique identifiers
// Useful for creating unique property keys and constants
const uniqueColor: symbol = Symbol('mlue');
const obj = {
    [uniqueColor]: color
};
console.log(obj[uniqueColor]);
