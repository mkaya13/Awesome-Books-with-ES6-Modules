/* eslint-disable import/no-cycle */
import Book from './modules/BookClass.js';
import { showBooks } from './modules/ShowandRemoveBooks.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const addForm = document.querySelector('#addBook');
const listMenu = document.querySelector('#list-section');
const addBookMenu = document.querySelector('#add-book-section');
const contactMenu = document.querySelector('#contact-section');
const listSection = document.querySelector('.main');
const addBookSection = document.querySelector('.formSection');
const contactSection = document.querySelector('.contact');
const showCurrentTime = document.querySelector('.current-time');

export const bookCollection = {
  books: [],
};

let newBook;

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  newBook = new Book(addTitle.value, addAuthor.value);

  bookCollection.books.push(newBook);

  Book.addBookToStorage();

  addAuthor.value = '';
  addTitle.value = '';

  showBooks();
});

const showDateTime = () => {
  // const time = new Date();
  // const curTime = time.toUTCString();
  // showCurrentTime.textContent = curTime;
  const dt = DateTime.now();
  showCurrentTime.textContent = dt
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
};

listMenu.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBookMenu.addEventListener('click', (e) => {
  e.preventDefault();
  addBookSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactMenu.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.style.display = 'block';
  listSection.style.display = 'none';
  addBookSection.style.display = 'none';
});

window.onload = () => {
  if (
    localStorage.getItem('storedBookData') !== null
    && localStorage.getItem('storedBookData') !== '[]'
  ) {
    showBooks();
    listSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }

  setInterval(showDateTime, 1000);
};

export default bookCollection;
