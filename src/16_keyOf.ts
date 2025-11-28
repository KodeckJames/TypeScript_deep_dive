// keyof is a TS keyword that's used to extract the key type from an object type
// When you use keyof against an interface or type, TypeScript looks at all the property names and creates a new type that only allows those specific names.
interface Person {
  name: string
  age: number
}
type PersonKeys = 'name' | 'age' //This is how TS translates keyof Person i.e.; a union of string literals representing those keys.

// keyof with explicit keys
const printPersonProperty = (person: Person, property: keyof Person) => {
  property == 'name'
    ? console.log(`Printing person property ${property}: "${person[property]}"`)
    : console.log(`Printing person property ${property}: ${person[property]}`)
}
let person = {
  name: 'Jlow',
  age: 16,
}
printPersonProperty(person, 'name')
printPersonProperty(person, 'age')

// keyof with index signatures
// The concept of using [property] is called index signature
type StringMap = { [key: string]: unknown }
const createStringMap = (
  property: keyof StringMap,
  value: string
): StringMap => {
  return { [property]: value }
}
console.log(createStringMap('Color', 'Yellow'))
