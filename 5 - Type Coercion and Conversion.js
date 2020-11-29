
console.log("This is Tutorial 5");

//   Type Conversion and Type Coercion in Javascript

let myVar;

myVar = 34;
console.log(myVar, (typeof myVar));

// Converting a Number to a String
myVar = String(34); 
console.log(myVar, (typeof myVar));
console.log(typeof myVar.toString())


let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

// Converting a Boolean value to a String
booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = new Date();
console.log(date, (typeof date));

// Converting a Date Object to a String
date = String(date);
console.log(date, (typeof date));

let arr = [1,2,3,4,5];
console.log(arr, (typeof arr));
console.log(arr.length);

// Converting an Array to a String
arr = String(arr);
console.log(arr, (typeof arr));
console.log(arr.length); 

// Conversion using to Strimg Method:-
let i = 69;
console.log(i, (typeof i));
console.log(i.toString());




// Conversion to Number:-

let stri = "Me";
console.log(stri, (typeof stri));
stri = Number(stri);
console.log(stri, (typeof stri));
// NaN means Not a Number. We get NaN because we are trying to convert an alphabetic string to number type.


let bool = false;
console.log(bool, (typeof bool));

bool = Number(bool);
console.log(bool, (typeof bool));
// 0 is for false andf 1 is for true

arr1 = [1,2,3,4,5];
console.log(arr1, (typeof arr1)); 
arr1 = Number(arr1);
console.log(arr1, (typeof arr1)); 
// Above Array Conversion returns NaN(Not a Number)

let num1 = '34';
console.log(num1, (typeof num1));
num1 = parseInt(num1);
console.log(num1, (typeof num1));

let num2 = '34.8';
console.log(num2, (typeof num2));
num2 = parseFloat(num2);
console.log(num2, (typeof num2));

let num3 = '69.69696969';
console.log(num3, (typeof num3));
num3 = parseFloat(num3).toFixed(3);
// To fixed takes as argument the number of values to be displayed after decimal point
console.log(num3, (typeof num3));




//                       Type Coercion in Javascript
 



let mystr1 = "698";
let mynum1 = 34;

console.log(mystr1 + mynum1); // Check Output
// As we can deduce from the outupt, the number value is converted to string and is concatenated with the string value.


let mystr2 = Number("698");
let mynum2 = 34;

console.log(mystr2 + mynum2); // Check Output

