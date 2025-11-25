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

// In type Aliases
type Wrapped<Y> = { name: Y };
const wrappedColor: Wrapped<string> = { name: "yellow" };
console.log(wrappedColor);
// This also works with interfaces:
interface WrappedLite<T,X,Y>{
    name: T,
    brightness: X,
    intensity: Y
}

const wrappedColorLite: WrappedLite<string, string, number> = {
    name: "Purple",
    brightness: "Medium",
    intensity:7
}
console.log(wrappedColorLite);

// Default value
// Generics can be assigned default values which apply if no other value is specified or inferred.
class NamedValueLite<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let valueLite = new NamedValue('myNumber');
value.SetValue('myValue');
console.log(valueLite.toString()); // myNumber: myValue

// Extends
// Constraints can be added to generics to limit what's allowed.

// The constraints make it possible to rely on a more specific type when using the generic type.
const constrainedFunction=<S extends string | number, T extends boolean | number > (yellow:S, pink:T ) => {
    return `Hello ${yellow} ${pink}`
}
console.log(constrainedFunction("Jlow", 5));