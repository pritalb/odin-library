let library = [];
let available_book_id = 1;
let show_add_book_form = false;

function Book(title, id, author, numOfPages, isRead) {
    this.title = title;
    this.id = id;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

function addBooktoLibrary(title, author, numOfPages, isRead) {
    let book = new Book(title, available_book_id, author, numOfPages, isRead);
    available_book_id += 1;
    library.push(book);

    displayLibrary();
}

function removeBookFromLibrary(id) {
    for (let index = 0; index < library.length; index++) {
        const book = library[index];

        if (book.id == id) {
            library.splice(index, 1);
            break;
        }
    }

    displayLibrary();
}

function createBook() {
    let form = document.querySelector('.add-book-form');
    let title = form.querySelector('.title').value;
    let author = form.querySelector('.author').value;
    let numOfPages = form.querySelector('.num-of-pages').value;
    let isRead = form.querySelector('.is-read').checked;

    addBooktoLibrary(title, author, numOfPages, isRead);
}

function displayBook(book) {
    let title = document.createElement('div');
    title.innerText = book.title;

    let author = document.createElement('div');
    author.innerText = book.author;

    let numOfPages = document.createElement('div');
    numOfPages.innerText = book.numOfPages;

    let isRead = document.createElement('div');
    isRead.innerText = `Has the book been read? : ${book.isRead ? 'yes' : 'no'}`;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove book';
    deleteBtn.addEventListener('click', ()=> {
        removeBookFromLibrary(book.id);
    })

    let card = document.createElement('div');
    card.className = 'book-card';
    card.append(title);
    card.append(author);
    card.append(numOfPages);
    card.append(isRead);
    card.append(deleteBtn);

    document.querySelector('.library').append(card);
}

function displayLibrary() {
    document.querySelector('.library').innerHTML = '';

    library.forEach(book => {
        console.log(book);

        displayBook(book);
    })
}

function toggle_add_book_form() {
    let add_book_form = document.querySelector('.add-book-form');

    if (show_add_book_form) {
        add_book_form.style.display = 'block';
    } else {
        add_book_form.style.display = 'none';
    }
    show_add_book_form = !show_add_book_form;
}

function main() {
    document.querySelector('.add-book-form-submit-btn').addEventListener('click', createBook);
    document.querySelector('.add-book-btn').addEventListener('click', toggle_add_book_form);

    toggle_add_book_form();
    // addBooktoLibrary('book name', 'dude', 15, false);
    // addBooktoLibrary('great book', 'other dude', 156, true);
    // addBooktoLibrary('some book name', 'dude', 215, false);
    // addBooktoLibrary('long book name', 'professor dude', 615, false);

    // console.log(library);
    // removeBookFromLibrary(2);
    // displayLibrary();
}
main()