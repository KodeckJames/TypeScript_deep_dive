// An Enum is a special class that represents a group of constants
// Enums come in two flavors string and numeric.
// 1. Numeric Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);
// You can assign unique number values for each enum value.
// Then the values will not be incremented automatically:
var StatusCodes3;
(function (StatusCodes3) {
    StatusCodes3[StatusCodes3["NotFound"] = 404] = "NotFound";
    StatusCodes3[StatusCodes3["Success"] = 200] = "Success";
    StatusCodes3[StatusCodes3["Accepted"] = 202] = "Accepted";
    StatusCodes3[StatusCodes3["BadRequest"] = 400] = "BadRequest";
})(StatusCodes3 || (StatusCodes3 = {}));
// logs 404
console.log(StatusCodes3.NotFound);
// logs 200
console.log(StatusCodes3.Success);
// Reverse mapping:
// logs Accepted
console.log((StatusCodes3[202]));
// String Enums
// Enums can also contain strings.
// This is more common than numeric enums, because of their readability and intent.
var CardinalDirections4;
(function (CardinalDirections4) {
    CardinalDirections4["North"] = "North";
    CardinalDirections4["East"] = "East";
    CardinalDirections4["South"] = "South";
    CardinalDirections4["West"] = "West";
})(CardinalDirections4 || (CardinalDirections4 = {}));
;
// logs "North"
console.log(CardinalDirections4.North);
// logs "West"
console.log(CardinalDirections4.West);
