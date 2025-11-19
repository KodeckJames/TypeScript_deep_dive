// Type Aliases allow defining types with a custom name (an Alias)
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: number,
    type: string,
    model: string
}

const carYear: CarYear = 2020;
const carType: CarType = "Mercedes";
const carModel: CarModel = "GLE";
const car: Car = {
    year: 2000,
    type: "Mercedes",
    model: "GLE"
};
console.log(carYear, carType, carModel);
console.log(JSON.stringify(car));

// Union and Intersection Types
type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = {
    name: "Apolo",
    honey:true
}
console.log(JSON.stringify(bear));

type Status = "Success" | "Failure";
const result: Status = "Success";
console.log(result);

// Interfaces
// Interfaces are similar to types, except they only apply to object types
interface Rectangle{
    height: number,
    width: number,
};

const rectangle: Rectangle = {
    height: 8,
    width: 4
};
console.log((JSON.stringify(rectangle)));

// Interface/declaration Merging
// Declaration Merging is a behavior in TypeScript where the compiler agrees to merge two or more separate declarations that share the same name into a single definition.
interface Animalia { name: string; }
interface Animalia { age: number; }
interface Animalia{gender:"Male"|"Female"}
const mammal: Animalia = {
    name: "Whale",
    age: 89,
    gender:"Male"
}
console.log(JSON.stringify(mammal));

// Extending Interfaces
// Interfaces can extend each other's definition.
interface Triangle{
    width: number,
    height: number
}

interface ColoredTriangle extends Triangle{
    color: string;
}

const myTriangle: ColoredTriangle = {
    width: 67,
    height: 88,
    color:"Yellow"
}
console.log(JSON.stringify(myTriangle));



