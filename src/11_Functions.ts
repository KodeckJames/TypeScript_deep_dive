// Return type
// If no return type is defined, TS will try to infer it through the types of the variables or expressions returned
const randomFunction = (): string => {
    return "Hello, World";
}
console.log(randomFunction());

// Void return type
// Type void can be used to indicate that a function doesn't return any value
const empty = (): void => {
    console.log("Yellow!, Nothing to show here!!!, Go write some code!");    
}
empty();

// Parameters
// If no param type is defined, TS will default to using any
const anotherFunction = (a: string, b: boolean) => {
    return `Hello, ${a}, are you ${b}?`;
}
console.log(anotherFunction("Jlow", true));

// Optional Params:
const optionalParams = (a: number, b: string, c?: boolean) => {
    return `Hello there index no. ${a}, it is ${c} that you ${b} a lot `;
}
console.log(optionalParams(1, "study", true));

// Default parameters | Parameters with default values
const DefaultParamsFunction = (a: number = 7) => {
    return `${a} the number of perfection`
}
DefaultParamsFunction();
// TypeScript can also infer the type from the default value.
const DefaultParamsFunction2 = (a = "Yellow") => {
    return `${a} the color of perfection`
}
DefaultParamsFunction2();

// Named Parameters
const NamedParams = ({ divisor, dividend }: { divisor: number, dividend: number }) => {
    return `${dividend} divide by ${divisor} = ${dividend/divisor}`
}
NamedParams({ dividend: 90, divisor: 5 });

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays
const restaParamsFunction = (a: number, b: number, ...rest: number[])=>{
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(restaParamsFunction(3, 4, 5, 2, 7, 8, 7, 1));

// Type Alias
// Function types can be accessed separately from functions using type aliases
type randomProp = (value: number) => number;

const randomTypeFunction: randomProp = (potato) => {
    return potato * 4;
}
console.log(randomTypeFunction(8));