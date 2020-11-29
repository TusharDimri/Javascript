console.log("We are at Tutorial 11");

//  Using Javascript Window Object

let a = window; // This is a window object 

console.log(a);

// Window object is automatically global so we can directly call its methods or call them as window.method
// window.alert("Hii Tushar");
// alert("Hii Tushar");


// a = prompt("This will destroy your life"); 
// The variable a will store the value that we enter inside the prompt
// console.log(a);

// a = confirm("Are you sure that you want to exit this page");
// The variable a will store true if we  click on ok else it stores false
// console.log(a);

// console.log(window.innerHeight);
console.log(innerHeight);
// console.log(window.innerWidth);
console.log(innerWidth);
// innerWidth and InnerHeigth value change as we change the size of the window.

// console.log(window.scrollX);
console.log(scrollX);
// console.log(window.scrollY);
console.log(scrollY);
// scrillX nad scrollY value depends on how muvh we have scrolled in the window

b = window.location;
console.log(b);
console.log(location.toString());
/*
NOTE:-
If we type:-
location.reload in the console, the page in current location will reload
loaction.href in the console ,  the url of the page is printed
loaction.href = url in the console, the specified url is opened
loaction.toString() return the loaction as a string
*/


c = window.history;
console.log(c);
/*
NOTE:-
if we type:-
history.length in the console we will get the length of our history
history.go(-1) in the console we will go back to the previous location in our history
 */