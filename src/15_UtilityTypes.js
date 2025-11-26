// Partial allows x and y to be optional
var pointOne = {};
pointOne.x = 5;
var pointReqOne = {
    a: true,
    b: "Yellow"
};
console.log(JSON.stringify(pointReqOne));
// 3. Record
// Record is a shortcut to defining object types with a specific key type and value type
var recordObj = {
    4: "Yellow",
    5: "Purple"
};
console.log(JSON.stringify(recordObj));
var recordObj2 = {
    8: "Jlow",
    10: "Force"
};
console.log(JSON.stringify(recordObj2));
var person1 = {
    name: "Klow",
};
// Omit has removed age and gender and they can't be used here
console.log(JSON.stringify(person1));
;
var customer1 = {
    name: "Monicah",
    age: 19,
    shirtSize: "Medium",
    shoeSize: 39
};
console.log(JSON.stringify(customer1));
var myCar = "GLE";
console.log(myCar);
var point = {
    x: 4,
    y: 8
};
console.log(JSON.stringify(point));
var pointExtracted = {
    x: "Yellow",
    y: 6
};
console.log(JSON.stringify(pointExtracted));
