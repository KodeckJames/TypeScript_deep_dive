// Usage
var myColor = "#0000FF";
// Usage:
var obj = { dynamic_key: "value" };
/*
  This type will expand to:
  "onClick" | "onHover" | "onSubmit"
*/
// Usage
var handler = "onClick"; // OK
// let wrongHandler: EventHandlerName<"click"> = "onHover"; // Error!
