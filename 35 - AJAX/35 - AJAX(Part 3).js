console.log('We are at Tutorial 35');

// POST Requests using AJAX

function fetchData() {
    url = 'http://dummy.restapiexample.com/api/v1/create';

    xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.getResponseHeader('content-type', 'application/json'); 
    postData = {"name":"test","salary":"123","age":"23"}; 

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1', true);

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

    xhr.send(postData);
    xhr.send();

    console.log("This is asynchronous programming");
}

fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchData);


function populateDOM() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onprogress = function () {
        console.log("Request On Progress");
    };

    xhr.onload = function () {
        if (this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = ``;

            for (key in obj){
                str += `<li> ${obj[key].title} </li>`;
            }
            list.innerHTML = str;
            
        }
        else{
            console.log("Error");
        }
    }

    xhr.send();

    console.log("This is asynchronous programming");
}

populateBtn = document.getElementById('populateBtn');
populateBtn.addEventListener('click', populateDOM);