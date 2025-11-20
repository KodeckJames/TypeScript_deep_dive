// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
;
var person = new Person("Yellow");
console.log(person);
// Members: Visibility
// Class members can also be given special modifiers that affect visibility.
var Person2 = /** @class */ (function () {
    function Person2(name) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    return Person2;
}());
var person2 = new Person2("Jlow");
console.log(person2.getName());
// Parameter properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifier to the parameter.
var Person3 = /** @class */ (function () {
    function Person3(name) {
        var _this = this;
        this.name = name;
        this.getName = function () {
            return _this.name;
        };
    }
    return Person3;
}());
var person3 = new Person3("Scofield");
console.log(person3.getName());
// Readonly
var Person4 = /** @class */ (function () {
    function Person4(name) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    return Person4;
}());
var person4 = new Person4("Monica");
console.log(person4.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea());
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle2));
var Rectangle3 = /** @class */ (function () {
    // using protected for these members allows access from classes that extend from this class, such as Square
    function Rectangle3(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle3.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle3.prototype.toString = function () {
        return "Rectangle[width=".concat(this.width, ", height=").concat(this.height, "]");
    };
    return Rectangle3;
}());
var Square2 = /** @class */ (function (_super) {
    __extends(Square2, _super);
    function Square2(width) {
        return _super.call(this, width, width) || this;
    }
    // this toString replaces the toString from Rectangle
    Square2.prototype.toString = function () {
        return "Square[width=".concat(this.width, "]");
    };
    return Square2;
}(Rectangle));
// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword.
// Members that are left unimplemented also use the abstract keyword.
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Rectangle5 = /** @class */ (function (_super) {
    __extends(Rectangle5, _super);
    function Rectangle5(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle5.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle5;
}(Polygon));
