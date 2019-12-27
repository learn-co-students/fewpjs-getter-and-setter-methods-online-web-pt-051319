// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
        this.pi = Math.PI
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.pi * this.diameter
    }

    get area() {
        return this.pi * (this.radius ** 2)
    }

    set diameter(newDiameter) {
        return this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        return this.diameter = newCircumference / this.pi
    }

    set area(newArea) {
        return this.radius = Math.sqrt(newArea / this.pi)
    }
}