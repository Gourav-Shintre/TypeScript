interface color{
    applyColor() :string;
}
class blueColor implements color{
    applyColor(): string {
        return "Blue"
    }
} 

class redColor implements color{
    applyColor():string{
        return "Red"
    }
}

abstract class shape{
   protected color :color;
    constructor(color:color){
        this.color=color
        
    }
    abstract draw():string;
}

class circle extends shape{
    draw(): string {
        return `Drawing circle with ${this.color.applyColor()} color`;    }
}

class square extends shape(){
    constructor(color:color){
        super(color)
    }
    draw(): string{
        return `Drawing square with ${this.color.applyColor()} color`;
    }
}

const b=new blueColor();
const c=new circle(b);
console.log(c.draw());