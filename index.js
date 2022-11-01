import { Book } from './modules/BookModule.js';
import { addBookToStorage, deleteBook } from './modules/BookAddAndDelete.js';
import { showDateTime } from './modules/DateTime.js';

const addTitle = document.querySelector('#addTitle');
const addAuthor = document.querySelector('#addAuthor');
const addForm = document.querySelector('#addBook');
const allBooks = document.querySelector('.books');
const listMenu = document.querySelector('#list-section');
const addBookMenu = document.querySelector('#add-book-section');
const contactMenu = document.querySelector('#contact-section');
const listSection = document.querySelector('.main');
const addBookSection = document.querySelector('.formSection');
const contactSection = document.querySelector('.contact');

let bookCollection = [];

let newBook;
let formData;
let bookCollectionHtml;

const addBtnRemoveEvent = () => {
  document.querySelectorAll('.delete_btn').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    const { id } = button;
    bookCollection = deleteBook(bookCollection, id);
    addBookToStorage(bookCollection);
    // eslint-disable-next-line no-use-before-define
    showBooks();
  }));
};

const showBooks = () => {
  formData = JSON.parse(localStorage.getItem('storedBookData'));
  bookCollection = formData;
  allBooks.innerHTML = '';
  formData.forEach((book, index) => {
    bookCollectionHtml = document.createElement('div');
    bookCollectionHtml.className = 'book-item';
    bookCollectionHtml.innerHTML = `
      <h3 class="book-title"><span>"${book.title}" by ${book.author}</span></h3>
      <button class="delete_btn" id="${index}">Remove</button>
    `;
    allBooks.appendChild(bookCollectionHtml);
  });

  addBtnRemoveEvent();
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  newBook = new Book(addTitle.value, addAuthor.value);
  bookCollection.push(newBook);

  addBookToStorage(bookCollection);

  addAuthor.value = '';
  addTitle.value = '';

  showBooks();
});

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
    localStorage.getItem('storedBookData') !== null && localStorage.getItem('storedBookData') !== '[]'
  ) {
    showBooks();
    listSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }

  setInterval(showDateTime, 1000);
};
