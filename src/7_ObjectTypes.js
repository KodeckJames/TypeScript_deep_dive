var Car = {
    type: "Mercedes",
    make: "GLE",
    year: 2010
};
console.log(Car);
console.log(JSON.stringify(Car));
// Type Inference
var car2 = {
    type: "Lamborghini"
};
console.log(car2.type);
// Optional Properties
var car3 = {
    name: "Hyundai",
    model: "Tucson",
};
console.log(JSON.stringify(car3));
// Index Signatures
// Index signatures can be used for Objects without a defined list of properties
var random = {};
random.name = "Jlow";
console.log(random);
var random2 = {};
random2[5] = 9;
console.log(random2);
var random3 = {
    name: "Klow",
    7: true,
    3: 2,
};
console.log(random3);
