// Return type
// If no return type is defined, TS will try to infer it through the types of the variables or expressions returned
var randomFunction = function () {
    return "Hello, World";
};
console.log(randomFunction());
// Void return type
// Type void can be used to indicate that a function doesn't return any value
var empty = function () {
    console.log("Yellow!, Nothing to show here!!!, Go write some code!");
};
empty();
// Parameters
// If no param type is defined, TS will default to using any
var anotherFunction = function (a, b) {
    return "Hello, ".concat(a, ", are you ").concat(b, "?");
};
console.log(anotherFunction("Jlow", true));
// Optional Params:
var optionalParams = function (a, b, c) {
    return "Hello there index no. ".concat(a, ", it is ").concat(c, " that you ").concat(b, " a lot ");
};
console.log(optionalParams(1, "study", true));
// Default parameters | Parameters with default values
var DefaultParamsFunction = function (a) {
    if (a === void 0) { a = 7; }
    return "".concat(a, " the number of perfection");
};
DefaultParamsFunction();
// TypeScript can also infer the type from the default value.
var DefaultParamsFunction2 = function (a) {
    if (a === void 0) { a = "Yellow"; }
    return "".concat(a, " the color of perfection");
};
DefaultParamsFunction2();
// Named Parameters
var NamedParams = function (_a) {
    var divisor = _a.divisor, dividend = _a.dividend;
    return "".concat(dividend, " divide by ").concat(divisor, " = ").concat(dividend / divisor);
};
NamedParams({ dividend: 90, divisor: 5 });
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays
var restaParamsFunction = function (a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
};
console.log(restaParamsFunction(3, 4, 5, 2, 7, 8, 7, 1));
var randomTypeFunction = function (potato) {
    return potato * 4;
};
console.log(randomTypeFunction(8));
