const Car: { type: string, make: string, year: number } = {
    type: "Mercedes",
    make: "GLE",
    year: 2010
}
console.log(Car);
console.log(JSON.stringify(Car));

// Type Inference
const car2 = {
    type: "Lamborghini"
}
console.log(car2.type);

// Optional Properties
const car3: { name: string, model: string, type?: string } = {
    name: "Hyundai",
    model: "Tucson",
}
console.log(JSON.stringify(car3));

// Index Signatures
// Index signatures can be used for Objects without a defined list of properties
const random: { [index: string]: string } = {};
random.name = "Jlow";
console.log(random);

const random2: { [index: number]: number } = {}
random2[5] = 9;
console.log(random2);

const random3: Record<any, any> = {
    name: "Klow",
    7: true,
    3:2,
}
console.log(random3);