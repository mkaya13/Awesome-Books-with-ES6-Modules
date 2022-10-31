/* eslint-disable import/no-cycle */
import Book from './BookClass.js';
import { bookCollection } from '../index.js';

let formData;
let bookCollectionHtml;

const allBooks = document.querySelector('.books');

const addBtnRemoveEvent = () => {
  document.querySelectorAll('.delete_btn').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    const { id } = button;
    Book.deleteBook(id);
    Book.addBookToStorage();
    // eslint-disable-next-line no-use-before-define
    showBooks();
  }));
};

export const showBooks = () => {
  formData = JSON.parse(localStorage.getItem('storedBookData'));
  bookCollection.books = formData;
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

export default {
  showBooks,
};
