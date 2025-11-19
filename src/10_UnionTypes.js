// Union types are used when a value can be more than a single type. Such as when a property can be a string or a number
var statusCode = function (code) {
    return "The status code returned is ".concat(code);
};
console.log(statusCode(200));
console.log(statusCode("200"));
