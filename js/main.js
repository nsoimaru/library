const table = (arg) => {
    console.table(arg);
} 

const log = (arg) => {
    console.log(arg);
} 

let myLibrary = [];
    

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        let readText = '';
        this.read === true 
        ? readText = "This book was reded!"
        : readText = "not read yet"

        return readText;
    }
}

class Library extends Book{
    constructor(title, author, pages, read) {
        super(title, author, pages, read);
    };
    addBook() {

    }

    modifyBook() {

    }

    deleteBook() {
        
    }
}

const theHobbit = new Book("The Hobbit", "J R Tolkien", "664", true);
const book1 = new Book("Book1", "Author1", "324", false);
const book2 = new Book("Book2", "Author2", "487", false);

const myTable = document.querySelector('#books>tbody')

myLibrary.push(theHobbit);
myLibrary.push(book1);
myLibrary.push(book2);

myLibrary.forEach(book => {
    let row = myTable.insertRow();
    row.insertCell(0).append('0');
    row.insertCell(1).append(book.title);
    row.insertCell(2).append(book.author);
    row.insertCell(3).append(book.pages);
    row.insertCell(4).append(book.read);
    row.insertCell(5).append('check box');
    row.insertCell(6).append('edit btn');
    row.insertCell(7).append('delete btn');
});
