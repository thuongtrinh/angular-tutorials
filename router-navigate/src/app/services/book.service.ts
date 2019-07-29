import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

const BOOKS: Book[] = [
  { bookId: 1, name: 'Java', author: 'Mahesh', state: 'off' },
  { bookId: 2, name: 'Angular', author: 'Mahesh', state: 'off' },
  { bookId: 3, name: 'Spring', author: 'Krishna', state: 'off' },
  { bookId: 4, name: 'Hibernate', author: 'Krishna', state: 'off' }
];

let booksPromise = Promise.resolve(BOOKS);

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  getBook(id: string): Promise<Book> {
    const idCover = parseInt(id);
    return booksPromise.then(books =>
      books.find(book => book.bookId === idCover)
    );
  }

  getBooks(): Promise<Book[]> {
    return booksPromise;
  }

  resetBookState(book: Book): Promise<Book[]> {
    return this.getBooks().then(books => {
      books.map(book => (book.state = 'off'));
      book.state = 'on';
      return books;
    });
  }

  addBook(book: Book): Promise<Book> {
    return this.getBooks().then(books => {
      const maxIndex = books.length - 1;
      const bookWithMaxIndex = books[maxIndex];
      book.bookId = bookWithMaxIndex.bookId + 1;
      book.state = 'off';
      books.push(book);
      return book;
    });
  }
}
