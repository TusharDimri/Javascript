console.log("We are at Tutorial 7");

let marks = [23, 45, 56, 96, 72];
console.log(marks);
const fruits = ["Orange", "Apple", "Banana"]
console.log(fruits);
const mixed = ["str", 69, [3, 5]];
console.log(mixed);

// Creating a Javascript Array using Array Constructor
const arr = new Array(23, 45 ,123, "0range");
console.log(arr);

// Array Indexing starts form 0 
console.log(arr[3]);


// Arrays in Javascript have Properties and Methods

console.log(arr.length) // length is a property of an array

console.log(Array.isArray("ascacsa")); // isArray  is a method of an array

arr[0] = "Tushar";
console.log(arr);

let fruit = arr[3];
console.log(fruit);

let value = marks.indexOf(34);
// Returns the first occurance(index) of given element in the array or return -1 if element is not in array.
console.log(value);


// Mutating/Modifying an Array

marks.push(69);
console.log(marks);
// Adds element to the last index of the array (Works exactly like Python append)

marks.unshift(72);
console.log(marks);
// Adds element at the 0th index of the array

marks.pop();
console.log(marks);
// Removes the element at the last index of the array and returns it

marks.shift();
console.log(marks);
// Removes the element at the 0th index of the array and returns it

marks.splice(1, 2);
console.log(marks);
// Remove 2 elements starting from the first index  (In this case 1st and 2nd index elements will be removed)

marks.reverse();
console.log(marks);

marks = marks.concat(fruits);
console.log(marks);

let myobj = {
    name : "Tushar",
    age : 18, 
    languages : ["Python", "Javascript", "Dart", "CSS", "HTML"],
    isactive : true,
    marks : 69
}

console.log(myobj);

// Accessing the elements of a Javascript Object
console.log(myobj.name);
console.log(myobj.age);
console.log(myobj.languages);
console.log(myobj.isactive);
console.log(myobj.marks);

// Accessing Javascript Objects using their keys
console.log(myobj['name']);
console.log(myobj['age']);
console.log(myobj['languages']);
console.log(myobj['isactive']);
console.log(myobj['marks']);

myobj['nation'] = "India";
console.log(myobj);
myobj['name'] = "Tushar Dimri";
console.log(myobj);