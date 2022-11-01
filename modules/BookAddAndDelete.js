export const addBookToStorage = (bookCollection) => {
  const str = JSON.stringify(bookCollection);
  localStorage.setItem('storedBookData', str);
};

export const deleteBook = (bookCollection, id) => {
  const itemToDelete = bookCollection[id];

  bookCollection = bookCollection.filter((item) => item !== itemToDelete);

  return bookCollection;
};

export default {
  addBookToStorage,
  deleteBook,
};
