const names: string[] = [];
names.push("Yellow")
console.log(names);

// Readonly
// The readonly keyword can prevent arrays from being changed
const names2: readonly string[] = ["Jlow"];
console.log(names2);

// Type Inference:
// TS can infer the type of an array if it has values
const numbers = [2, 3, 4];

// Give the array a non-empty type
// If you know your array will always have at least one element:
const numbers2 = [2, 3, 4, 5] as [number, ...number[]];
numbers.push(2, 3, 4);
console.log(numbers);
// Tell TS that you know it exists (non-null assertion)
let head: number = numbers[0]!;
// Provide a fallback value (recommended + safe)
let second: number = numbers[1] ?? 0;

let third: number = numbers2[2]!;
console.log(head);
console.log(second);
console.log(third);