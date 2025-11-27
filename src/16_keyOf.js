var printPersonProperty = function (person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
};
var person = {
    name: "Jlow",
    age: 16
};
printPersonProperty(person, "name");
