console.log("We are at Tutorial 30");

// Creating Prototype for an Object
const proto = {
    slogan : function () {
        return "This Company is the Best";
    },
    changeName : function name(newName) {
           this.name = newName;
    }
}

const Tushar = Object.create(proto);
console.log(Tushar);
Tushar.name = "Tushar Dimri";
Tushar.role = "Winner";
Tushar.game = function () {
    console.log(`${Tushar.name} always wins`)
}
console.log(Tushar);

// Using the functions of the prototype we created on the Object Tushar
Tushar.changeName("Tushar");
console.log(Tushar);
console.log(Tushar.slogan());

// Alternative way of creating Objects
const TD = Object.create(proto, {
    name : {value: "Tushar Dimri", writable: true},
    // If we don't set writeable to truw then we won't be able to change the value of name using protoype function changeName() we created earlier
    role : {value: "Programmer"},
    game : {value: function () {
        console.log(`${this.name} always wins`)
    }}
}); 
console.log(TD);
console.log(TD.name);
console.log(TD.role);
console.log(TD.game());

// Using the functions of the prototype we created on TD Object
console.log(TD.slogan());
TD.changeName("T.D.");
console.log(TD);

// ------------------------------------- PROTOTYPE INHERITANCE ------------------------------------


// Employee Constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
Employee.prototype.slogan = function() {
    return `We are the World. Regards ${this.name}`;
}
Employee.prototype.changeName = function(newName) {
    this.name = newName;
}

// Object Creation Using Constructor
let emp1 = new Employee("Tushar", 1200000000000, 5);
// console.log(emp1);
// emp1.changeName("Tushar Dimri");
// console.log(emp1.slogan());

// Programmer Constructor
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    // Above line Inherits name, salaey and experience to 'this' constructor from Employee Constructor
    this.language = language;
}

let Rohan = new Programmer("Rohan", 2, 0 , "Javascript");
console.log(Rohan);
// As we can Observe from the output, Programmer objects do not inherit the prototype of Employee constructor.

// To inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the Constructor
Programmer.prototype.constructor = Programmer;

// -----------------------------------------Exercise --------------------------------------------

function Raw(item1, item2, item3) {
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
}
Raw.prototype.info = function () {
    console.log("We will create cake using Raw Material")
}
let materials = new Raw("Base", "Gnash", "Cream");
console.log(materials);

function Cake(item1, item2, item3, flavor) {
    Raw.call(this, item1, item2, item3);
    this.flavor = flavor;
}

Cake.prototype = Object.create(Raw.prototype);

Cake.prototype.constructor = Cake;

let cake1 = new Cake("Base", "Gnash", "Cream", "Dark");
console.log(cake1);