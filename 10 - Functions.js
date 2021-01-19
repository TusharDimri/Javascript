console.log("We are at Tutorial 10");

// Functions in Javascript

const name = "Tushar";

console.log(`Happy Birthday ${name}`);

function greet(name = "Tushar") {
    // console.log(`Happy Birthday ${name}`);
    greeting = `Happy Birthday ${name}`;
    return greeting;
}
// Above function has default value for name (name="Tushar") in case name is not passed to the function

greeting = greet(name);
console.log(greeting);

// NOTE :- A function without a name is called as "anonymous function"

//  Assingning a function to a variable.

let g = function (name) { // The function is now called using the variable as it does not have any name
    return `Hii ${name}`;
}
val = g("Tushar Dimri");
console.log(val);

// Creating a Function inside a Javascript Object

const myobj = {
    name : "Gamer 69",
    game : function (){
        return "GTA Vice City";
    }
}
console.log(myobj.name);
console.log(myobj.game());


// Traversing an array using forEach function

arr = [12, "TD", "69", true, false, "Machine Learning"];
arr.forEach(function(element, index, array) {
    console.log(`element ${element} in array [${array}] at index ${index}`);
});

// forEach function can take three arguments :- element of array , index of the given element and the array itself





//                                     SCOPE OF A VARIABLE IN JAVASCRIPT



if (1){
    var i = 69; // this is a global variable with global scope as it is created using var keyword
    console.log(i);
}
console.log(i);
function ui(name) {
    let i = 9; // This is a local variable with block level scope as it is created using let keyword
    console.log(i);
    return `${name} here`
}
console.log(ui("Tushar"), i);