console.log('We are at Tutorial 28');

// Object Created Using Object Literal
let obj = {
    name : "Tushar",
    instrument : "Guitar",
    address : "Neptune"
}
console.log(obj);
/*
Note:- 
As we can check in the console, obj contains the variables that we defined in it.
But it also contains __proto__ in it which we did not define.
__proto__ or Object Prototype Comes by Default with the object.
It contains predefind methods which we can use.
*/

function Obj(name) {
    this.Name = name;
}
let obj2 = new Obj("Tushar");
console.log(obj2);
// As we can see in the console this object also contains the Object Prototype

// Basically, Prototype is defined by how we create an object.
// Object that we created using Constructor has its own Protype i.e. Obj.
// Also, Obj will contain its own default Prototype.  

// Manipulating the Prototype of Obj:-
Obj.prototype.getName = function () {
    return this.Name;
}
console.log(Obj);

console.log(obj2.getName());

/*
NOTE:-
Don't ever change the prototype og GLOBAL Javascript Object.
Create Your Own Constructor and change its Prototype if you want.
*/

// Using Prototype to change an Object value
Obj.prototype.setName = function (newName) {
    this.Name = newName;
}
obj2.setName("Tushar Dimri");
console.log(obj2);