console.log("We are at Tutorial 23");

let x = 3;
let y = 6;
let z;
console.log(z);
z = x + y;
console.log(z);
z = x - y
console.log(z);
z = x * y;
console.log(z);
z = x / y;
console.log(z, "\n");


// Exploring the Math Object

val = Math;
console.log(val);
val = Math.PI;
console.log(val);
val = Math.E;  // This is Euler's Number (Used in Loggistic Regression)
console.log(val, "\n");

// Important Math Functions


console.log(Math.round(5.5));
console.log(Math.round(5.3));
console.log(Math.round(5.9), "\n");


console.log(Math.ceil(5.5));
console.log(Math.ceil(5.3));
console.log(Math.ceil(5.9, "\n"));
// Line 28, 29, 30 will log 6

console.log(Math.floor(5.5));
console.log(Math.floor(5.3));
console.log(Math.floor(5.9));
// Line 28, 29, 30 will log 5

// CHECK the output of below values:-
console.log(Math.round(-1.6));
console.log(Math.round(-1.3));
console.log(Math.ceil(-1.3));
console.log(Math.ceil(-1.3));
console.log(Math.floor(-1.3));
console.log(Math.floor(-1.3));


console.log(Math.abs(-12));
console.log(Math.abs(12));
console.log(Math.abs(-12.9));

console.log(Math.sqrt(4));

console.log(Math.max(12, 23, 69, 65, 1, -711));

console.log(Math.min(12, 23, 69, 65, 1, -711));


// Generating Random Numbers:-
r = Math.random();
//  r contains a random value between 0 and 1
console.log(r)

// To generate Random Numbers between 0 and 100
r = Math.random()*100;
console.log(r);

// To generate Random numbers between 69 and 100
r = 69 + Math.random() * (100 - 69);
console.log(r);

// To generate INTEGER Random numbers between 0 and 50
r = Math.floor(50 + Math.random() * (100 - 50));
console.log(r);