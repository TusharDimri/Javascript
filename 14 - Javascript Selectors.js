console.log("We are at Tutorial 14");

// HTML Selectors in Javascript


/*

There are 2 types of element selectors in Javascript :-
1. Single Element Selector
2. Multi Element Selecto

*/


// Single Element Selectors :- 

// Selecting Element by ID :-
let element = document.getElementById('child-1');
console.log(element);
console.log(element.className);
console.log(element.childNodes);
console.log(element.parentNode);
console.log(element.innerText);
console.log(element.innerHTML);

// Manipulating the Selected Element :-
element.style.color = 'red';
// element.innerText = "Tushar Dimri"; 
element.innerHTML = `<b>Tushar Dimri</b>`;

let sel1 = document.querySelector('#child-2');
console.log(sel1);

let sel2 = document.querySelector('.child');
// Above Selector will target the 'first' element of classs child
console.log(sel2);

let sel3 = document.querySelector('h1');
// sel3.style.color = "red";
console.log(sel3);
// Above Selector will select the first h1 in our document


// Multi Element Selector :-

let cls1 = document.getElementsByClassName('child');
console.log(cls1);
console.log(cls1[0]);
console.log(cls1[1]);
console.log(cls1[2]);
console.log(cls1[3]);

let cls2 = document.getElementsByTagName('div');
console.log(cls2);
console.log(cls2[0]);
console.log(cls2[1]);
console.log(cls2[2]);
console.log(cls2[3]);
console.log(cls2[4]);

console.log('\n');

// Traversing over an HTML Collection :-

// 1. Traversing Usiing forEach Function
Array.from(cls1).forEach(function(element){
    console.log(element);
})

console.log('\n');

// 2. Traversing Using for loop
for (let index = 0; index < cls2.length; index++) {
    const element = cls2[index];
    console.log(element);
}