// Generics allow creating "type variables" which can be used to create classes, functions & types that don't need to explicitly define the types that they use.
// Generics make it easy to write reusable code
var createPair = function (first, second) {
    return [first, second];
};
console.log(createPair("Yellow", 4));
// In Classes
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.SetValue = function (value) {
        return this._value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ":").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue("Yellow");
console.log(value.toString());
var wrappedColor = { name: "yellow" };
console.log(wrappedColor);
var wrappedColorLite = {
    name: "Purple",
    brightness: "Medium",
    intensity: 7
};
console.log(wrappedColorLite);
// Default value
// Generics can be assigned default values which apply if no other value is specified or inferred.
var NamedValueLite = /** @class */ (function () {
    function NamedValueLite(name) {
        this.name = name;
    }
    NamedValueLite.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValueLite.prototype.getValue = function () {
        return this._value;
    };
    NamedValueLite.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValueLite;
}());
var valueLite = new NamedValue('myNumber');
value.SetValue('myValue');
console.log(valueLite.toString()); // myNumber: myValue
// Extends
// Constraints can be added to generics to limit what's allowed.
// The constraints make it possible to rely on a more specific type when using the generic type.
var constrainedFunction = function (yellow, pink) {
    return "Hello ".concat(yellow, " ").concat(pink);
};
console.log(constrainedFunction("Jlow", 5));
