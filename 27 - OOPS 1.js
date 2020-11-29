console.log("We are at Tutorial 27");

// Object Literal
obj = {
    name: "Tushar",
    languages: ["Hindi", "English", "Japanese"],
    programming_languages: ["Python, Javascript"]
};
console.log(typeof obj);

// Another Object Literal
car = {
    name: "Alto K10",
    topSpeed: 120,
    run : function (){
        console.log("Car is Running")
    }
}
console.log(car);
console.log(car.name);
console.log(car.topSpeed);
console.log(car.run());


// -------------------------   Creating Objects in Javascript Using Constructers --------------------------

// Contructors are templates to ceate an Object in OOPS
// For Example:-
// new Date(), creats a new instance/object using constructor

// Creating a Constructor for Cars
function GeneralCar(name, topSpeed) {
    this.Name = name;
    this.TopSpeed = topSpeed;
    this.run = function () {
        console.log(`${this.Name} is Running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by than ${200 - this.TopSpeed} Audi`)
    }
}

car1 = new GeneralCar("Alto K10", 120); 
// car1  is an object we creted using a Constructor
console.log(car1);
console.log(car1.Name);
console.log(car1.TopSpeed);
console.log(car1.run());
console.log(car1.analyze());

console.log("\n");

car2 = new GeneralCar("Alto 800", 110);
// car2  is an object we creted using a Constructor
console.log(car2);
console.log(car2.Name);
console.log(car2.TopSpeed);
console.log(car2.run());
console.log(car2.analyze());