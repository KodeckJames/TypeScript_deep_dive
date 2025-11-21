// Generics allow creating "type variables" which can be used to create classes, functions & types that don't need to explicitly define the types that they use.
// Generics make it easy to write reusable code

const createPair = <x, y>(first: x, second: y): [x, y] => {
    return [first, second];
}
console.log(createPair<string, number>("Yellow", 4));
