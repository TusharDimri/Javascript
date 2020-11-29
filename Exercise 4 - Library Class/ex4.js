console.log("We are at Exercise 4");

class Library{
    constructor(bookList, libName){
        this.bookList = bookList;
        this.user = libName;
    }
    getBookList(){
        return `Booklist = ${this.bookList}`;
    }
}