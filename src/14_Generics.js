// Generics allow creating "type variables" which can be used to create classes, functions & types that don't need to explicitly define the types that they use.
// Generics make it easy to write reusable code
var createPair = function (first, second) {
    return [first, second];
};
console.log(createPair("Yellow", 4));
