// Define the interface
interface shapes {
    getArea: () => number;
}

// Implement the interface with the circle class
class circle implements shapes {
    private r: number; // Corrected to number for radius

    // Constructor with a parameter for radius
    public constructor(radius: number) {
        this.r = radius;
    }

    // Implement the getArea method
    public getArea(): number {
        return Math.PI * this.r * this.r; // Calculate area of circle
    }
}

// Usage example
let cr = new circle(5); // Creating a circle with radius 5
console.log(cr.getArea()); // Output the area of the circle

