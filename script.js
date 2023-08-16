const myLibrary = [];

const form = document.querySelector('form');
const inputAuthor = document.getElementById('author');
const inputTitle = document.getElementById('title');
const inputNumberOfPages = document.getElementById('numberOfPages');
const inputReadStatus = document.getElementById('readStatus');
const submit = document.querySelector('input[type="submit"]');

function Book(author, title, numberOfPages, readStatus) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  submit.addEventListener('click', () => {
    const book = new Book(inputAuthor.value, inputTitle.value, inputNumberOfPages.value, inputReadStatus.value);
    myLibrary.push(book);

    inputAuthor.value = '';
    inputTitle.value = '';
    inputNumberOfPages.value = '';
    inputReadStatus.value = '';
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

});

addBookToLibrary();
console.log(myLibrary);