// Utility types help with some common type manipulation
// 1. Partial
// Partial changes all properties in an object to be optional
interface Point{
    x: number,
    y: string
}
// Partial allows x and y to be optional
const pointOne: Partial<Point> = {};
pointOne.x = 5;
console.log(pointOne);


// 2. Required
// Required changes all properties to be required
interface PointReq{
    a: boolean,
    b: string
}

const pointReqOne: Required<PointReq> = {
    a: true,
    b: "Yellow"
};
console.log(JSON.stringify(pointReqOne));

// 3. Record
// Record is a shortcut to defining object types with a specific key type and value type
const recordObj: Record<number, string> = {
    4: "Yellow",
    5: "Purple"
};
console.log(JSON.stringify(recordObj));

const recordObj2: { [key: number]: string } = {
    8: "Jlow",
    10:"Force"
}
console.log(JSON.stringify(recordObj2));

// 4. Omit
// Omit removes keys from an object type
interface Person{
    name: string,
    age: number,
    gender?:string
}

const person1: Omit<Person, "age" | "gender"> = {
    name: "Klow",
}
// Omit has removed age and gender and they can't be used here
console.log(JSON.stringify(person1));

// 5. Pick
// Pick removes all but the specified keys from an object type
// i.e., you can only use the ones you've specified/ picked
interface Person2{
    name: string,
    age: number,
    gender: string,
    location: string,
    shoeSize: number,
    shirtSize: "Small"|"Medium"|"large"|"ExtraLarge"
};

const customer1: Pick<Person2, "name" | "age" | "shirtSize" | "shoeSize"> = {
    name: "Monicah",
    age: 19,
    shirtSize: "Medium",
    shoeSize: 39
};
console.log(JSON.stringify(customer1));

// Exclude
// Exclude removes types from a union
type Car = "GLE" | "Urus" | "CX5" | "Tucson";
const myCar: Exclude<Car, "CX5"> = "GLE";
console.log(myCar);

// ReturnType
// ReturnType extracts the return type of a function type
type PointGenerator = () => { x: number, y: number };
const point: ReturnType<PointGenerator> = {
    x: 4,
    y: 8
}
console.log(JSON.stringify(point));

// Parameters
// Parameters extracts the parameter types of a function types as an array
type ParamExtractor = (p: { x: string, y: number }) => void;
const pointExtracted: Parameters<ParamExtractor>[0] = {
    x: "Yellow",
    y: 6
}
console.log(JSON.stringify(pointExtracted))

// Readonly
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value
// Keep in mind TS will prevent this at compile time, but in theory since it is compiled down to JS, you can still override a readonly property.
type Foods = {
    name: string,
    quantity: number,
    isRipe: boolean
}

const foodOne: Readonly<Foods> = {
    name: "Chapati",
    quantity: 90,
    isRipe:true
}
console.log(JSON.stringify(foodOne));