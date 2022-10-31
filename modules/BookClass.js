/* eslint-disable import/no-cycle */
import { bookCollection } from '../index.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBookToStorage() {
    const str = JSON.stringify(bookCollection.books);
    localStorage.setItem('storedBookData', str);
  }

  static deleteBook(id) {
    const itemToDelete = bookCollection.books[id];
    bookCollection.books = bookCollection.books.filter(
      (item) => item !== itemToDelete,
    );
  }
}
