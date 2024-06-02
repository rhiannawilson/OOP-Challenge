class Shape {
    constructor(){
        this.color=''
    }
    setColor (color){
        this.color= color;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<circle r="45" cx="50" cy="50" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="45" cx="50" cy="50" fill="${this.color}" />`
    }
}

module.exports={Circle, Triangle, Square}