console.log("We are at Tutorial 6");

const name = "Tushar";
const greeting = "Good Evening";
console.log(greeting + ' ' + name);

let html ;
html = "<h1>This is my heading</h1>" + "<p>This is my Paragraph</p>";
html = html.concat(' THIS', ' IS', ' ME' ) ;
console.log(html);


// Common String Functions :-

console.log(html.length);

console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[0]);
console.log(html[64]);

console.log(html.indexOf('This')) 
// indexOf() returns first occurance of specified string in the given string else returns -1
console.log(html.lastIndexOf('<'));
// lastIndexOf() returns last occurance of specified string (index start from 0) in the given string else returns -1
console.log(html.charAt(30));
// charAt() returns the character at the specified index in the string

console.log(html.endsWith('ME'));
// endsWith() returns true if the specifed string ends with given argument, else it returns false.

console.log(html.includes("heading"));
// includes() returns true if given string is a subset of the specified string, else it returns false


console.log(html.substring(0,51));
// substring() returns the substring starting from first position(0) to last position - 1(50) in the string 

console.log(html.slice(0, 5));
// slice() is used for string slicing




// Difference between slice() and substr() 

console.log(html.slice(-4));
// Above code will print last four character of string  html

console.log(html.substring(-4));
// Above code will print all characters except the last four characters of string html


//  *******               split() in Javascript                    *******

console.log(html.split(" "));
// split() works exactly like like Pythhon split() method


console.log(html.replace('This', "It"));
// replace() replaces the first occurance of first argument to the second argument in the specified string




//                                    Template Literals in Javascript

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `
<h1> Hello World </h1>

<p>
I eat 

"${fruit1}"

and

'${fruit2}'
</p>

`;  // Create using backticks (``). We can use "" and '' freely inside backticks
console.log(myHtml);

// document.body.innerHTML = myHtml;

let nm = "Tushar Dimri";

let coolHTML = `
    <h1 style="text-align:center;">Welcome ${nm} </h1>
    <p style="text-align:center;"> Keep Rocking </p>
`;

document.body.innerHTML = coolHTML;
