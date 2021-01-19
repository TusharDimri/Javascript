console.log("This is Tutorial 3");

// Variables in Javascript

// var , let, const are the keywords used to declare a variable.

var name = "Tushar";
var last = `D'Costa`
// We use `` to enclose strings in Javascript as after using them we can add " and ' in between the string.
console.log(name);
console.log(last);

var channel;  // We just declared a variable without any value
console.log(channel);

var age = 34; // This is an Integer
console.log(name, age);
age = 19;
console.log(age);

/*
Rules for naming Javascript variables :-
1. Variable name cannot start with a number.
2. Variable name can contain letters, numbers, _ and $ only.
3. Variable names are Case Sensitive.
4. Variable names can start with _. Also the variable that starts with _ are private variables.
5. It is not recommended (although you can use $ start with) to use $ with variable names as jquery uses $ and it may create confusion.

*/

const nm = "Tushar Dimri";
// We can change value of variables declared using var keyword but we cannot change the value of the variable that is declared using const keyword.

// nm = "Tushar";  // Will raise an error as nm is declared using const keyword.

// We can't just declare a const variable we need to assign a value to it at the time of declaration or an exception will be raised

// const n1 ;  // Will raise an exception.

// let keyword has only block level scope while var has global scope.
// We cannot use a varibale declared using let keyword outside its block
{
    let city = "Dehradun";
    console.log(city);
}
// console.log(city); will raise an exception

const arr = [1,2,3,4,5];
arr.push(6) // This is a legit operation and will not generate any error
console.log(arr);

/*

Most Common Case types to name a variable:-

1. Camel Case - camelCase
2. Kebab Case - kebab-case 
3. Upper Camel Case / Pascal Case - CamelCase
4. Snake Case - snake_case

*/
