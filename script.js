let library = [];
let available_book_id = 1;

class Book {
    constructor (title, id, author, numOfPages, isRead) {
        this.title = title;
        this.id = id;
        this.author = author;
        this.numOfPages = numOfPages;
        this.isRead = isRead;
    }
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
    let label = document.createElement('label');
    label.className = 'book-card-label';
    let info_container = document.createElement('div');

    let title = document.createElement('div');
    title.className = 'book-card-title';
    title.innerText = book.title;

    let author = document.createElement('div');
    author.className = 'book-card-author';
    author.innerText = book.author;
    
    let numOfPages = document.createElement('div');
    numOfPages.className = 'book-card-element';
    label.innerText = 'Total Pages: ';
    info_container.innerText = book.numOfPages;
    numOfPages.append(label.cloneNode(true));
    numOfPages.append(info_container.cloneNode(true));

    let isRead = document.createElement('div');
    isRead.className = 'book-card-element';
    label.innerText = 'Done Reading? ';
    info_container.innerText = book.isRead ? 'Yes' : 'No';
    isRead.append(label.cloneNode(true));
    isRead.append(info_container.cloneNode(true));

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.addEventListener('click', ()=> {
        removeBookFromLibrary(book.id);
    })
    deleteBtn.className = 'btn';

    let info = document.createElement('div');
    info.className = 'book-card-info';
    info.append(title);
    info.append(author);
    info.append(numOfPages);
    info.append(isRead);


    let card = document.createElement('div');
    card.className = 'book-card';
    card.append(info);
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

function main() {
    document.querySelector('.add-book-form').addEventListener('submit', (e) => {
        e.preventDefault();
        createBook();
    });
 }
main()
