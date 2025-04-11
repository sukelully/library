const tbody = document.getElementById('table-body');
const dialog = document.getElementById('book-dialog');
const addBookBtn = document.getElementById('add-book-btn');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');
const submitBtn = document.getElementById('submit-btn');



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

// addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
// addBookToLibrary('The Martian', 'Andy Weir', 300, true);
// addBookToLibrary('The Queen\'s Gambit', 'Walter Tevis', 400, true);
// addBookToLibrary('The Road', 'Cormac McCarthy', 500, false);

function displayBooks() {
    for (const book of library) {
        console.log(book);
    }
}

function addTableRow(bookObj) {
    const newRow = document.createElement('tr');
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

    tbody.appendChild(newRow);
}

function displayTable() {
    for (const bookObj of library) {
        addTableRow(bookObj);
    }
}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const pages = parseInt(bookForm.pages.value);
    const read = bookForm.read.value === 'true';

    addBookToLibrary(title, author, pages, read);
    displayTable();
    bookForm.reset();
    dialog.close();
});
