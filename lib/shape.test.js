const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
    it("renders correctly", () => {
        const shape = new Circle();
        let color = "green"; // lowercase color name
        shape.setColor(color);
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green" />'
        );
    });
});

describe("Square", () => {
    it("renders correctly", () => {
        const shape = new Square();
        let color = "blue"; // lowercase color name
        shape.setColor(color);
        expect(shape.render()).toEqual(
            '<rect x="50" y="50" width="200" height="200" fill="blue" />'
        );
    });
});

describe("Triangle", () => {
    it("renders correctly", () => {
        const shape = new Triangle();
        let color = "pink"; // lowercase color name
        shape.setColor(color);
        expect(shape.render()).toEqual(
            '<polygon points="150,20 250,180 50,180" fill="pink" />'
        );
    });
});