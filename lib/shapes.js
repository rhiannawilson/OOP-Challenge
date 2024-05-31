class Shape {
    constructor(){
        this.color='';

    }
    setColor (color) {
        this.color= color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="45" cx="50" cy="50" fill="${this.color}" />`
    }
}

module.exports={Circle, Triangle, Square}