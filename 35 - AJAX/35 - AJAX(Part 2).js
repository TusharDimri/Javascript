console.log("This is Tutorial 35");

// Using AJAX for JSON Data

function fetchData() {
    url = 'https://jsonplaceholder.typicode.com/todos/1';

    xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    // If we set the last parameter to false then this will be a blocking-request(synchronous) and tasks after this will be done when this task is finished.

    xhr.onprogress = function () {
        console.log("Request On Progress");
    };

    xhr.onload = function () {
        if (this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.log("Error");
        }
    }

    xhr.send();

    console.log("This is asynchronous programming");
    // Above line is logged first befor xhr part because we used non-blocking(async) ajax call.
}

fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchData);