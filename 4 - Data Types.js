
console.log("This is Tutorial 4");

// There are 2 Data Tyoes in Javascript :-
// 1. Primitive Data Types. (Stack)
// 2. Reference Data Types. (Heap)

// Types of Primitive Data Types in Javascript :-
// 1. Numbers - 34 , 34.4
// 2. Strings
// 3. Boolean - true or false
// 4. Null - No Value
// 5. Undefined - If we just declare a variable without assigning a value to it it is undefined
// 6. Symbol - Introduced in ES6

// Types of Refrence Data Types in Javascript
// 1. Arrays
// 2. Object Literals
// 3. Functions
// 4. Dates

/*

Javascript is a Dynamically Typed Language

*/



//   Primitive Data Types :-



// Strings :-
let name = "Tushar";
console.log("My String is " + name);
console.log("Datatype is " + (typeof name));


// Numbers:-
let age = 18;
console.log("Age is " + age);
console.log("Datatype is " + (typeof age));


// Boolean :-
let canDrive = false;
console.log("Can Drive " + (typeof canDrive));


// Null :-
let nullVar = null;
console.log("Datatype is " + (typeof nullVar));
// Output shows that this is an object but this is a Primitive Data Type. Thus, null has a bogus return value value. 


let undef;
console.log("Datatype is " + (typeof undef));




// Reference Data Types :-



//  Arrays :-
let myarr = [1, 2, 3, "four", false, undefined, null];
console.log("Datatype is " + (typeof myarr));


//  Object Literals :-
let nmAge = {
    "Tushar":18,
    "Shrishti":18,
    "Dhruv":17, 
    "John":40,
}
console.log("Datatype is " + (typeof myarr));



// Functions :-
function td() {
    console.log('This is a Function')
}
td();
console.log("Datatype is " + (typeof td));  // Type is function(not object)


//  Date:-
let date = new Date();
console.log("Datatype is " + (typeof date));