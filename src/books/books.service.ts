import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  books: Book[] = [new Book('a', 123, '1234'), new Book('b', 143, '643')];

  getAllBooks(): Book[] {
    return this.books;
  }

  findBook(id: number): Book {
    return this.books.find((bk) => bk.id === id);
  }

  createBook(createBookDto: Book): Book {
    createBookDto.id = this.books.length + 1;
    this.books.push(createBookDto);
    return createBookDto;
  }

  updateBook(updateBookDto: Book): Book {
    const bookIndex = this.books.findIndex((bk) => bk.id === updateBookDto.id);
    this.books[bookIndex] = updateBookDto;
    return updateBookDto;
  }

  deleteBook(id: number) {
    this.books = this.books.filter((bk) => bk.id !== id);
    return true;
  }
}
