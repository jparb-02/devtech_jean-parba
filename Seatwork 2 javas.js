
class Vehicle {
    constructor(make, model, year,ownername) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.ownername = ownername;
    }

    displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`OwnerName: ${this.ownername}`);
    }
}


class Car extends Vehicle {
    constructor(make, model, year, ownername, doors) {
        super(make, model, year, ownername);
        this.doors = doors;
    }

    displayDetails() {
        super.displayDetails(); 
        console.log(`Doors: ${this.doors}`);
    }
}


const vehicle = new Vehicle('Ford', 'F-150', 2020,'Joshua');
console.log('Vehicle Details:');
vehicle.displayDetails();


const car = new Car('Honda', 'Accord', 2023,'Rica',4);
console.log('\nCar Details:');
car.displayDetails();
