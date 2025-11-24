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
