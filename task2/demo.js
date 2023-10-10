class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    
    calculateArea() {
        return this.length * this.breadth;
    }

    
    calculatePerimeter() {
        return 2 * (this.length + this.breadth);
    }
}


const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(8, 12);
const rectangle3 = new Rectangle(6, 9);


console.log("Rectangle 1 - Length:", rectangle1.length, "Breadth:", rectangle1.breadth);
console.log("Area:", rectangle1.calculateArea());
console.log("Perimeter:", rectangle1.calculatePerimeter());
console.log();

console.log("Rectangle 2 - Length:", rectangle2.length, "Breadth:", rectangle2.breadth);
console.log("Area:", rectangle2.calculateArea());
console.log("Perimeter:", rectangle2.calculatePerimeter());
console.log();

console.log("Rectangle 3 - Length:", rectangle3.length, "Breadth:", rectangle3.breadth);
console.log("Area:", rectangle3.calculateArea());
console.log("Perimeter:", rectangle3.calculatePerimeter());
