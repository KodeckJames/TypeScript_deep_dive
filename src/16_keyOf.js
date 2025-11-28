var printPersonProperty = function (person, property) {
    property == 'name'
        ? console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""))
        : console.log("Printing person property ".concat(property, ": ").concat(person[property]));
};
var person = {
    name: 'Jlow',
    age: 16,
};
printPersonProperty(person, 'name');
printPersonProperty(person, 'age');
