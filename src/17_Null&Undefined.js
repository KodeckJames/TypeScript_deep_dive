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
        sqft: 700
    }
};
printYardSize(home);
