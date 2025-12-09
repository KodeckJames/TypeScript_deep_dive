// By default, null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true
var value = null;
value = 'Yellow! We are back like we never left';
value = undefined;
var printYardSize = function (house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    yardSize === undefined
        ? console.log('Yards not defined')
        : console.log("Total Yards is ".concat(yardSize));
};
var home = {
    sqft: 700,
    yard: {
        sqft: 700,
    },
};
printYardSize(home);
//3. Nullish Coalescing
// Nullish Coalescing allows writing expressions that have a fallback specifically when dealing with null or undefined
var printMileage = function (mileage) {
    console.log("Total mileage is ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available', " "));
};
printMileage(null);
printMileage(0);
//4. Null Assertion
// TS's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined
// An easy way to do this is to use casting, but TS also provides the ! operator as a convenient shortcut.
var getValue = function () {
    return "Hello";
};
var value2 = getValue();
console.log("Value length: ".concat(value2.length));
// Just like casting, this can be unsafe and should be handled with care
// 5. Array bounds handling
// Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
var array = [1, 2, 3, 4];
var value3 = array[0];
console.log(value3); // with `noUncheckedIndexedAccess` this has the type `number | undefined`
