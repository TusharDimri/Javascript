console.log("We are at Tutorial 20");

//  Local & Session Storage in Javascript


// Adding a key and value pair to localStorage
localStorage.setItem('Name1', "Tushar");
localStorage.setItem('Name2', "XYZ");
// Check window.localStorage and typeof(window.localStorage) in the console


// Retrieve an item from localStorage
console.log(localStorage.Name1);
console.log(localStorage.Name2);
let name1 = localStorage.getItem('Name1');
let name2 = localStorage.getItem('Name2');
let name3 = localStorage.getItem('Name3'); // This will return null as there is no item Name3 in our localStorage
console.log(name1);
console.log(name2);
console.log(name3); 


// To clear our localStorage we use localStorage.clear;
localStorage.setItem('Name3', "ABC");
localStorage.removeItem('Name3')


let arr1 = ["A", "B", "C"];
localStorage.setItem('Names1', arr1);
console.log(localStorage);
// As we can see in the console , arr is stores as a string not as an array
console.log(localStorage.getItem('Names1'));
// As we can see, the item we retrieved was not an array.It was a string.

// Therefore, to store arrays we use JSON.stringify and to retrieve them we use JSON.parse
let arr2 = ["A", "B", "C", "D", "E"];
localStorage.setItem('Names2', JSON.stringify(arr2));
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem('Names2')))


/*
Session Storage works exactly like Local Storage (same Methods) but ony for one session.
*/
sessionStorage.setItem('Name', "Tushar");
console.log(sessionStorage);

