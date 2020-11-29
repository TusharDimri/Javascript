console.log("Weare at Tutorial 16");

let element = document.createElement('li');

// Adding a classname to the element
element.className = 'childul';

// Adding an id to an element
element.id = "created";

// Setting Attribute of an Element
element.setAttribute('name', 'mytitle');

// Setting Text or Inner HTML 

// Method 1 (Best Method as we can add HTML too)
element.innerHTML = "<b>User</b>";

// Method 2:-
// element.innerText = "User";

// Method 3:-
// text = document.createTextNode("User")
// element.appendChild(text);

console.log(element)

// Appending the element we created to the DOM
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

// Getting Attribute of an Element
console.log(element.getAttribute('id'));
// If the specified element does not have the given attribute, then getAttribute function returns false

// Replacing an Element Using Javascript
let element2 = document.createElement('h1');
element2.className = "replace";
element2.id = "replace";
element2.innerHTML = "Hello World"
rep = document.querySelector('h1');
rep.replaceWith(element2);

// Replacing child of an Element Using Javascript
let myUl = document.getElementById('this');
e = document.createElement('li');
e.className = "child-ul";
e.id = "ul";
e.innerHTML = "<b>my</b>";
myUl.replaceChild(e , document.getElementById('ul-li-3'));

// Removing child of an element using Javascript
// myUl.removeChild(document.getElementById('created'));


// Removing Attribute of an Element
// if(element2.hasAttribute('id') == true){
//     // element2.removeAttribute('id');
// }
// console.log(element2);


// QUICK QUIZ
// Create a Heading Element with text as "Go to codewithharry" and create an a tag outside it with href="https://codewithharry.com"

let heading = document.createElement('h3');
let link = document.createElement('a');
link.href = "https://codewithharry.com";
link.innerHTML = "Go to Code With Harry";
console.log(link);
heading.appendChild(link);
console.log((heading));
let cont = document.querySelector('.container');
cont.appendChild(heading);