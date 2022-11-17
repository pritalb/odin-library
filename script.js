let library = []
let available_book_id = 1

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

function displayLibrary() {
    library.forEach(book => {
        console.log(book);
    })
}

function main() {
    document.querySelector('.add-book-form-submit-btn').addEventListener('click', createBook);

    // addBooktoLibrary('book name', 'dude', 15, false);
    // addBooktoLibrary('great book', 'other dude', 156, true);
    // addBooktoLibrary('some book name', 'dude', 215, false);
    // addBooktoLibrary('long book name', 'professor dude', 615, false);

    // console.log(library);
    // removeBookFromLibrary(2);
    // displayLibrary();
}
main()