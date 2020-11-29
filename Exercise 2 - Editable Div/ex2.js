let edit = document.getElementById('edit');

edit.addEventListener('click', edit_your_div);

let element = document.createElement('input');

function edit_your_div(e){
    console.log("You Clicked Here")
    element.type = "text";
    element.className = "editable";
    edit.replaceWith(element); 
}

element.addEventListener('blur', store);


function store(e) {
    console.log(element.value);
    console.log("Blur Activated");
    localStorage.setItem("Edit",element.value);
    element.replaceWith(edit);
}