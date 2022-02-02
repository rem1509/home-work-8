class Transport {
    constructor(name, speed, color, salon) {
        this.name = name;
        this.speed = speed;
        this.color = color;
        this.seat = salon;
    }

    startEngine () {
        console.log("Engine is disable");
    }
}

class Car extends Transport{
    constructor(name, speed, color, salon, transmission) {
        super(name, speed, color,  salon);
        this.transmission = transmission;
    }
    startEngine() {
        console.log("Car is start");
    }
}

class Train extends Transport {
    constructor(name, speed, color, salon, wagons) {
        super(name, speed, color, salon);
        this.wagons = wagons;
    }
    startEngine() {
        console.log("Train is start");
    }
}

const train = new Train("Поезд Пусан-Сеул", "Синконсен 270км/ч", "gray",  "Купе", 85);
console.log(train);
train.startEngine();

const car = new Car("tesla x", "250км/ч", "purple",  "leather interior", "reducer");
console.log(car);
car.startEngine();



