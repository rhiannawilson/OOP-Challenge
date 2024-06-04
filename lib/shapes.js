//The Shape class initializes an object with a color property and a method to set it,
//while the Circle class extends Shape and includes a method to render an SVG circle element.
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-family="Arial" font-size="60" text-anchor="middle" fill=""> </text>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,20 250,180 50,180" fill="pink" /><text x="150" y="125" font-family="Arial" font-size="60" text-anchor="middle" fill="">SVG </text>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="blue" /><text x="150" y="125" font-family="Arial" font-size="60" text-anchor="middle" fill="> </text>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };