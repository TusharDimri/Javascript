console.log("We are at Tutorial 12");

// Understanding DOM in Javascript

let a = document;
// Alternatively, a = window.document;
console.log(a);

// a stores the document object of the page
// DOM sands for Document Object Model. DOM is the structural representation of out html document.
// a contains an 'object' (DOM)

console.log(typeof a);

// We use DOM to manipulate our Website using Javascript

all = document.all;
console.log(all);
// We get an array like object as output but it is not actually an array and we cannot use forEach function on that object to traverse it.

// But, we can traverse all as :-
Array.from(all).forEach(function(element){
    console.log(element);
})


b = document.body;
console.log(b);

form = document.forms[0];
console.log(form);

l = document.links; // This will contain the links inside out document
console.log(l);
console.log(l[0]);

s = document.scripts;
console.log(s);
console.log(s[0]);

i = document.images;
console.log(i);
console.log(i[0]);
