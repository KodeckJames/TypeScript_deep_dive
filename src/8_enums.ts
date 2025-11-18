// An Enum is a special class that represents a group of constants
// Enums come in two flavors string and numeric.

// 1. Numeric Enums
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);

// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);

// You can assign unique number values for each enum value.
// Then the values will not be incremented automatically:
enum StatusCodes3 {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes3.NotFound);
// logs 200
console.log(StatusCodes3.Success);

// String Enums
// Enums can also contain strings.
// This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections4 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections4.North);
// logs "West"
console.log(CardinalDirections4.West);