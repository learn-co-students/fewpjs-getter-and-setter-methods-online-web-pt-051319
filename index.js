// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI  * this.diameter;
    }

    get area() {
        return Math.PI  * this.radius * this.radius;
    }

    
    set diameter(dia) {
        this.radius = dia/2
      }
    
      set circumference(num) {
        this.radius =  (num/3.14)/2
      }




}