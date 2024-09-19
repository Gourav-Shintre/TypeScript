
interface Color {
    applyColor(): string;
}

class BlueColor implements Color {
    applyColor(): string {
        return "Blue";
    }
}

class RedColor implements Color {
    applyColor(): string {
        return "Red";
    }
}

abstract class Shape {
    protected color: Color;
    protected name?:string

    constructor(color: Color,name?:string) {
        this.color = color;
        this.name=name;
    }

    abstract draw(): string;
}

class Circle extends Shape {
    draw(): string {
        return `Circle filled with ${this.color.applyColor()} color and the name is ${this.name}`;
    }
}

class Square extends Shape {
    draw(): string {
        return `Square filled with ${this.color.applyColor()} color`;
    }
}


const blueColor = new BlueColor();
const redColor = new RedColor();

const blueCircle = new Circle(blueColor,"anna");
const redSquare = new Square(redColor);


console.log(blueCircle.draw());
console.log(redSquare.draw());

export{}
