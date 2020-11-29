console.log("We are at Tutorial 9");

//  There are 3 types of loops in Javascript:-
// for loop
// while loop
// do-while loop

a = 1;
a += 1;
console.log(a);
a++;
console.log(a);



// Using for loop im Javascript:-  
for (let i = 0; i <= 25; i++) {
    console.log(i);
}



// Using while loop in Javascript:-
j = 0;
while (j <= 25) {
    console.log(j);
    j++;
}



//  Using do-while loop in Javascript
var k = 0;
do {
    console.log(k);
    k++ ;
} while (k <= 5)


/*
The differennce between while and do-while loop is that while loop is a entry controlled loop while do-while loop is an exit controlled loop.
This basically means that in while loop condition is tested first before we enter the loop while in do-while loop the condition is tested after entring the loop for 1 time.
Even if the condition as false, do-while loop works at least once before the condition is tested.
*/



// Using break and continue statements  in Javascript
for (let a=0; a<=100; a++){
    console.log(a);
    if(a === 10){
        break;
    }
}

for (let b=0; b<100; b++){
    if (b<80){
        continue;
    }
    console.log(b);
   
}




//  Traversing an Array in Javascript

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index , array) {
    console.log(`element ${element} in array [${array}] at index ${index}`);
})

for (let x=0; x<=arr.length; x++){
    const element = arr[x];
    console.log(element);
}




//  Traversing an Object in Javascript
let obj = {
    name : "Tushar Dimri",
    age : 18,
    type : "Programmer",
    os : "Windows"
}

for (key in obj){
    console.log(`Key is ${key} and Value is ${obj[key]}`);
}