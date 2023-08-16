const myLibrary = [];

const form = document.querySelector('form');
const inputAuthor = document.getElementById('author');
const inputTitle = document.getElementById('title');
const inputYear = document.getElementById('year');
const inputNumberOfPages = document.getElementById('numberOfPages');
const inputReadStatus = document.getElementById('readStatus');
const submit = document.querySelector('input[type="submit"]');

function Book(author, title, year, numberOfPages, readStatus) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
}

function createTextNode(book) {
  const library = document.querySelector('.library');
  const article = document.createElement('article');
  article.className = 'book';

  const titleTextNode = document.createTextNode(`Title: ${book.title}`);
  const authorTextNode = document.createTextNode(`Author: ${book.author}`);
  const yearTextNode = document.createTextNode(`Year: ${book.year}`);
  const numberOfPagesTextNode = document.createTextNode(`Number of Pages: ${book.numberOfPages}`);
  const readStatusTextNode = document.createTextNode(`Read Status: ${book.readStatus}`);

  article.appendChild(titleTextNode);
  article.appendChild(document.createElement('br'));
  article.appendChild(authorTextNode);
  article.appendChild(document.createElement('br'));
  article.appendChild(yearTextNode);
  article.appendChild(document.createElement('br'));
  article.appendChild(numberOfPagesTextNode);
  article.appendChild(document.createElement('br'));
  article.appendChild(readStatusTextNode);
  library.appendChild(article);
}

function addBookToLibrary() {
  submit.addEventListener('click', () => {
    const book = new Book(inputAuthor.value, inputTitle.value, inputYear.value, inputNumberOfPages.value, inputReadStatus.value);
    myLibrary.push(book);
    createTextNode(book);

    inputAuthor.value = '';
    inputTitle.value = '';
    inputYear.value = '';
    inputNumberOfPages.value = '';
    inputReadStatus.value = '';
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

});

addBookToLibrary();
console.log(myLibrary);