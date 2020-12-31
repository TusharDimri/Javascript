console.log("We are at Tutorial 35");

/*
1. AJAX stands for Asynchronous Javascript and XML.
2. AJAX is not a programming language. Rathr, it's a set of existing technologies.
3. AJAX helps in fetching data asynchronously without interfering with the existing page. 
4. No page reload/refresh is required.
5. Modern websites use JSON instead of XML for data transfer.
*/ 

/*
Why use AJAX?
1. No page reload/refresh is required.
2. Better user experience.
3. Saves network bandwidth.
4. Very interactive.
 */


/*
How it works?
1. AJAX uses XMLHttpRequest object (also called xhr object) to achieve this.
2. Modern websites use JSON instead of XML for data transfer.
3. Data can be transformed into any format(.txt, .html .json, etc.) and any protocol.(https is not always necessary).
 */

function buttonClickHandler() {
    console.log('Clicked');

    // Instantiate an XHR Object
    const xhr = new XMLHttpRequest();
    
    // Open the object
    xhr.open('GET', 'AJAX.txt', true);
    // Here get is the method , ajax.txt is the file which ww will fetch and true means that we are using this asynchronously.

    // What to when our request is on progress(optional)
    xhr.onprogress = function () {
        console.log("On Progress");
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200){
            // http status code 200 means request is successful.
            console.log(this.responseText);
        }
        else{
            console.error("Some Error");
        }
    }

    // What to do when response is ready( alternative to xhr.onload() )
    // xhr.onreadystatechange = function () {
    //     console.log("Ready State = " + xhr.readyState);
    // }
    /*
    Value:-    State:-                  Description:-
    0	       UNSENT	                Client has been created. open() not called yet.
    1	       OPENED	                open() has been called.
    2	       HEADERS_RECEIVED	        send() has been called, and headers and status are available.
    3	       LOADING	                Downloading; responseText holds partial data.
    4	       DONE	                    The operation is complete.
     */

    // Sending request
    xhr.send();
}

let fetchBtn= document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);
console.log("Asynchronous Task");