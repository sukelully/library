const library = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = {
        book: new Book(title, author, pages, read),
        id: crypto.randomUUID()
    }

    library.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);

function displayBooks() {
    for (const book of library) {
        
    }
}

console.log(library[0]);