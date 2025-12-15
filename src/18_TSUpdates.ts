// Template literal Types
// They allow us to create more precise types using template literals
type Color = "blue" | "red" | "orange";
type HexColor<T extends Color> = `#${string}`;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";

// Index signature labels
// They allow us to label index signatures using computed property names
type DynamicObject = { [key: `dynamic_${string}`]: string };

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };

// Define a union of allowed event names
type Event = "click" | "hover" | "submit";

// Template Literal Type
type EventHandlerName<E extends Event> = `on${Capitalize<E>}`;

/*
  This type will expand to:
  "onClick" | "onHover" | "onSubmit"
*/

// Usage
let handler: EventHandlerName<"click"> = "onClick"; // OK
// let wrongHandler: EventHandlerName<"click"> = "onHover"; // Error!