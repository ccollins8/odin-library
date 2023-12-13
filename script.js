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

const removeBtn = document.querySelector('.removeBtn')


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

function clearLibrary() {
    const parent = document.querySelector('.cards')
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild)
    }
}

function displayLibrary() {
myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card')
    cards.appendChild(card)

    const title = document.createElement('div')
    title.textContent = `Title: ${book.title}`
    card.appendChild(title)

    const author = document.createElement('div')
    author.textContent = `Author: ${book.author}`
    card.appendChild(author)

    const pages = document.createElement('div')
    pages.textContent = `Pages: ${book.pages}`
    card.appendChild(pages)

    const read = document.createElement('div')
    if (book.readStatus == true) {
        read.textContent = `Status: Read`

    } else {
        read.textContent = "Status: Not Read"
    }
    card.appendChild(read)

    const updateBtn = document.createElement('button')
    updateBtn.classList.add('updateBtn')
    updateBtn.textContent = "Update Status"
    card.appendChild(updateBtn)

    updateBtn.addEventListener("click", () => {
        if (book.readStatus == true) {
            myLibrary[myLibrary.indexOf(book)].readStatus = false;
            read.textContent = "Status: Not Read"
        } else {
            myLibrary[myLibrary.indexOf(book)].readStatus = true;
            read.textContent = "Status: Read"
        }
    })


    const removeBtn = document.createElement('button')
    removeBtn.classList.add('removeBtn')
    removeBtn.textContent = `Remove Book`
    card.appendChild(removeBtn)

    removeBtn.addEventListener("click", () => {
        removeBtn.parentElement.remove()
        myLibrary.splice(myLibrary.indexOf(book,1))
    })

    
})


    
}

showButton.addEventListener("click", () => {
    dialog.showModal();
})

submitButton.addEventListener("click", () => {
    dialog.close();
})




form.addEventListener('submit', (e) => {
e.preventDefault();
addBookToLibrary();
clearLibrary()
displayLibrary();
clearForm();
});

myLibrary.push(new Book("The Hobit", "J.R.R Tolkien", 295, true))
myLibrary.push(new Book("Moby Dick", "Herman Melville", 400, true))

displayLibrary()
