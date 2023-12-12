const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        if (this.readStatus == true) {
            return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const readStatus = document.querySelector('#readStatus')


const form = document.querySelector('form')

const dialog = document.querySelector('dialog')
const showButton = document.querySelector('.add-book')
const submitButton = document.querySelector('form button')

const cards = document.querySelector('.cards')


function addBookToLibrary() {
    const book = new Book(title.value, author.value, pages.value, readStatus.checked)
    myLibrary.push(book)
}

function clearForm() {
    title.value = ''
    author.value = ''
    pages.value = ''
    readStatus.checked = false;
}

function displayLibrary() {
    let card = document.createElement('.card');

    
}

showButton.addEventListener("click", () => {
    dialog.showModal();
})

submitButton.addEventListener("click", () => {
    dialog.close();
})



form.addEventListener('submit', (e) => {
e.preventDefault();
addBookToLibrary()
displayLibrary()
clearForm();
});

