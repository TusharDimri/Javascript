console.log("We are at Tutorial 34");

console.log("\nSynchronous:-\n");

for (let index = 0; index < 45; index++) {
    console.log(`${index+1}`);
    // Assume this to be a time consuming task
}

console.log("Task Completed");
// As we are using Synchronous programming(by default) therefore the above line will be executed when the given for loop has successfully executed.

console.log("\nAsynchronous:-\n");


// Basic Example of Asynchronous Programming:-

setTimeout(() => {    
    for (let index = 0; index < 45; index++) {
        console.log(`${index+1}`);
    }
}, 10); // 10ms

console.log("Task Completed"); // This line will be logged first
