console.log("We are at Tutorial 15");

// Traversing ther DOM in Javascript

let ch = document.querySelector('.child');
// First element of child class is selected
console.log(ch);

let cont = document.querySelector('.container');
console.log(cont);

console.log(cont.childNodes);
// Child nodes includes text, doctype and even comments which in most cases are not what we are interested in.
// Hence, we will use chidren in place of childNodes in case we don't want them
console.log(cont.children);

let nodeName = cont.childNodes[0].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[0].nodeType;
console.log(nodeType);
/*
Node Types :-
1   Elements
2 -  Attribute
3 -  Text Node
8 -  Comment
9 -  Document
10 -  DocType
*/

let container = document.querySelector('div.container');
console.log(container);
console.log(container.children);
// Traversing an Element
console.log(container.children[1].children[0].children);

console.log(container.firstChild);
// firstChild prints the first element of the container.childNode
console.log(container.firstElementChild);
// firstElementChild prints the first element of the container.children
console.log(container.lastChild);
// firstChild prints the last element of the container.childNode
console.log(container.lastElementChild);
// firstChild prints the last element of the container.children

console.log(container.childElementCount);
// childElementCount returns the length of container.children

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

