// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

class Person{
    name: string;

    constructor(name: string) {
        this.name=name
    }

};
const person = new Person("Yellow");
console.log(person);

// Members: Visibility
// Class members can also be given special modifiers that affect visibility.
class Person2{
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName=(): string=>{
        return this.name
    }
}
const person2 = new Person2("Jlow");
console.log(person2.getName());

// Parameter properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.
class Person3{
    constructor(private name: string) { }
    getName=(): string=>{
        return this.name;
    }
}
const person3 = new Person3("Scofield");
console.log(person3.getName());

// Readonly
class Person4{
    private readonly name: string

    constructor(name: string) {
        this.name=name
    }

    getName = ():string => {
        return this.name
    }
    
}
const person4 = new Person4("Monica");
console.log(person4.getName());

// Inheritance
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea());

// Inheritance: Extends
// Classes can extend each other through the extends keyword
// A class can only extend another class
interface Shape {
  getArea: () => number;
}

class Rectangle2 implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}

// Override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword.
interface Shape {
  getArea: () => number;
}

class Rectangle3 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square2 extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword.
// Members that are left unimplemented also use the abstract keyword.
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle5 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}