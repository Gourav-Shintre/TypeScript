"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BlueColor = /** @class */ (function () {
    function BlueColor() {
    }
    BlueColor.prototype.applyColor = function () {
        return "Blue";
    };
    return BlueColor;
}());
var RedColor = /** @class */ (function () {
    function RedColor() {
    }
    RedColor.prototype.applyColor = function () {
        return "Red";
    };
    return RedColor;
}());
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        return "Circle filled with ".concat(this.color.applyColor(), " color");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        return "Square filled with ".concat(this.color.applyColor(), " color");
    };
    return Square;
}(Shape));
var blueColor = new BlueColor();
var redColor = new RedColor();
var blueCircle = new Circle(blueColor);
var redSquare = new Square(redColor);
console.log(blueCircle.draw());
console.log(redSquare.draw());
