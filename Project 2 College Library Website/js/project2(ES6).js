console.log("This is ES6 version of Project 2");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI")
        let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
        `;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let form = document.getElementById('libraryForm');
        form.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }


    show(type, msg) {
        let Message = document.getElementById('message');
        Message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message: </strong>${msg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;
        setTimeout(() => {
            Message.innerHTML = ``;
        }, 5000);
    }

}


// Add submit event listener to libraryFrom
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Submitted Successfully");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    // Fiction, Programming an Mathematics are the 3 types of books
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let mathematics = document.getElementById('mathematics');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (mathematics.checked) {
        type = mathematics.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "Your Book has been successfully added");
    }
    else{
        display.show('danger', "Sorry, you cannot add this book");
    }

    e.preventDefault();
    // The default behaviour of form on submitting it is that ir reloads the page after we submit it.
    // So, to prevent this default behaviour we used preventDefault method.
}