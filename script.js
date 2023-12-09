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

const theHobit = new Book('The Hobit','J.R.R Tolkien',295,true)
// console.log(theHobit.info())

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
    
}


form.addEventListener('submit', (e) => {
e.preventDefault();
addBookToLibrary()
clearForm();
});

