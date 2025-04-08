const tbody = document.getElementById('table-body');

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
addBookToLibrary('The Martian', 'Andy Weir', 300, true);
addBookToLibrary('The Queen\'s Gambit', 'Walter Tevis', 400, true);
addBookToLibrary('The Road', 'Cormac McCarthy', 500, false);

function displayBooks() {
    for (const book of library) {
        console.log(book);
    }
}

function addTableRow() {
    const newRow = document.createElement('tr');

    for (const bookObj of library) {
        const book = bookObj.book;

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;

        const readCell = document.createElement('td');
        readCell.textContent = book.read ? 'Yes' : 'No';

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(pagesCell);
        newRow.appendChild(readCell);
    }

    tbody.appendChild(newRow);
}

addTableRow();