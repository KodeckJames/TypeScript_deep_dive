var _a;
var names = [];
names.push("Yellow");
console.log(names);
// Readonly
// The readonly keyword can prevent arrays from being changed
var names2 = ["Jlow"];
console.log(names2);
// Type Inference:
// TS can infer the type of an array if it has values
var numbers = [2, 3, 4];
// Give the array a non-empty type
// If you know your array will always have at least one element:
var numbers2 = [2, 3, 4, 5];
numbers.push(2, 3, 4);
console.log(numbers);
// Tell TS that you know it exists (non-null assertion)
var head = numbers[0];
// Provide a fallback value (recommended + safe)
var second = (_a = numbers[1]) !== null && _a !== void 0 ? _a : 0;
var third = numbers2[2];
console.log(head);
console.log(second);
console.log(third);
