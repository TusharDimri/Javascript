console.log("We are at Tutorial 8");

// Conditional Statements in Javascript

const age = 18;
let age2 = 69;

if (age > 18){
    console.log("Age is 18+");
}

else if (age == 18){
    console.log("Age is  18");
}

else{
    console.log("Age is less than 18");
}

// If we use if rather than else if ,all conditions are checked even if the condition is satisfied

if (age2 == 69){
    console.log("Age is 69");
}

if (age == 18){
    console.log("Age is  18");
}

else{
    console.log("Age is neither 18 nor 69");
}

// == Compare only value not type and value. We use === to compare both type and value
a = 69;
b = '69';
console.log(a == b); // true as both a and b have the same value i.e. 69
console.log(a === b); // false as a is a number and b is a string

// != compare only value while !== compare both type and value 
console.log(a != b); // false as both a and b have the same value i.e. 69
console.log(a !== b);  // true as both a and b have different data types


// Using Conditional Statements to check whether a variable exists or not

let vari = 23;
// let vari;
if (typeof vari !== 'undefined'){
    console.log('Variable is defined');
}
else{
    console.log('Variable is not defined');
}

canDrive = true;

if (canDrive){
    console.log("You can Drive");
}
else {
    console.log("You cannot Drive");
}

if (canDrive == true && age >= 18){
    console.log("You are eligible to drive")
}
else{
    console.log("You are not eligible to drive");
}






//          Ternary Operators in Javascript

console.log(age == 18 ?'Age is 18':'Age is not 18');




//          Switch Case Statements in Javascript

switch (age) {
    case 18: // If age == 18
        console.log("You are 18")
        break;
    
    case 12:  // If age == 12
        console.log("You are not 18")
        break;

    case 22: // If age == 22
        console.log("You are not 18")
        break;

    default: // Age is not one of the specified age
        console.log("Unknown Age")
        break;
}
