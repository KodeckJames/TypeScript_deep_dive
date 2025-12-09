// By default, null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true

let value: string | undefined | any = null
value = 'Yellow! We are back like we never left'
value = undefined

// 2. Optional Chaining
// Optional chaining is a JS feature that works well with TS's null handling
// It allows accessing properties on an object that may or may not exist, using compact syntax
// It can be used with the ?. operator when accessing properties

interface House {
  sqft: number
  yard?: {
    sqft: number
  }
}

const printYardSize = (house: House) => {
  const yardSize = house.yard?.sqft
  yardSize === undefined
    ? console.log('Yards not defined')
    : console.log(`Total Yards is ${yardSize}`)
}
let home: House = {
  sqft: 700,
  yard: {
    sqft: 700,
  },
}
printYardSize(home)

//3. Nullish Coalescing
// Nullish Coalescing allows writing expressions that have a fallback specifically when dealing with null or undefined
const printMileage = (mileage: number | null | undefined) => {
  console.log(`Total mileage is ${mileage ?? 'Not Available'} `)
}
printMileage(null);
printMileage(0);

//4. Null Assertion
// TS's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined
// An easy way to do this is to use casting, but TS also provides the ! operator as a convenient shortcut.
const getValue = (): string | undefined =>{
    return "Hello";
}
let value2= getValue();
console.log(`Value length: ${value2!.length}`);

// Just like casting, this can be unsafe and should be handled with care

// 5. Array bounds handling
// Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
let array: number[] = [1, 2, 3, 4];
let value3 = array[0];
console.log(value3); // with `noUncheckedIndexedAccess` this has the type `number | undefined`
