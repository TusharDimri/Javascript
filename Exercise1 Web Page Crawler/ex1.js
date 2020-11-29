console.log('We are in Exercise 1');

links = document.links;

console.log(links);

console.log("\n");


Array.from(links).forEach(function (element) {
    if (element.href.includes("https://")){
        console.log(element);
    }
})

console.log("\n");

Array.from(links).forEach(function (element) {
    if (element.toString().includes("https://")){
        console.log(element);
    }
})