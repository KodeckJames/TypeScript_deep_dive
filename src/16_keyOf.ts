// keyof is a TS keyword that's used to extract the key type from an object type
interface Person{
    name: string,
    age: number
}

const printPersonProperty = (person: Person, property: keyof Person) => {
    console.log(`Printing person property ${property}: "${person[property]}"`);    
}
let person = {
    name: "Jlow",
    age: 16
};
printPersonProperty(person, "name");