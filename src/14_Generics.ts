// Generics allow creating "type variables" which can be used to create classes, functions & types that don't need to explicitly define the types that they use.
// Generics make it easy to write reusable code

const createPair = <x, y>(first: x, second: y): [x, y] => {
    return [first, second];
}
console.log(createPair<string, number>("Yellow", 4));

// In Classes
class NamedValue<T>{
    private _value : T | undefined;

    constructor(private name: string) { }
    
    public SetValue(value: string) {
        return this._value
    }

    public getValue(): T | undefined{
        return this._value;
    }

    public toString(): string{
        return `${this.name}:${this._value}`;
    }

}
let value = new NamedValue<number>("Yellow");
console.log(value.toString());
