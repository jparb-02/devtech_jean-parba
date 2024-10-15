class Vehicle {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
    }      
}

class Car extends Vehicle {
    constructor(name, model, color, doors) {
        super(name, model, color);
        this.doors = doors;
    }
    displayDetails() {
        super.displayDetails();  
        console.log(`Doors: ${this.doors}`);
    }
}

const Vehicle1  = new Vehicle('Honda', 'Mobilio', 'White');
const Vehicle2 = new Vehicle('Toyota', 'Fortuner', 'Blue');

console.log('Vehicle-1 Detail');
Vehicle1.displayDetails();  

console.log('Vehicle-2 Detail');
Vehicle2.displayDetails();  
