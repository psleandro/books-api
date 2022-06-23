import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';

@Controller('/Books')
export class BooksController {
  books: Book[] = [new Book('a', 123, '1234'), new Book('b', 143, '643')];

  @Get()
  getBooks(): Book[] {
    return this.books;
  }

  @Get(':id')
  findBook(@Param() findBookDto): Book {
    return this.books.find((bk) => bk.id === Number(findBookDto.id));
  }

  @Post()
  createBooks(@Body() createBookDto: Book): Book {
    createBookDto.id = this.books.length + 1;
    this.books.push(createBookDto);
    return createBookDto;
  }

  @Put()
  updateBooks(@Body() updateBookDto): Book {
    const bookIndex = this.books.findIndex((bk) => bk.id === updateBookDto.id);
    this.books[bookIndex] = updateBookDto;
    return updateBookDto;
  }

  @Delete(':id')
  deleteBooks(@Param() deleteBookDto): boolean {
    this.books = this.books.filter((bk) => bk.id !== deleteBookDto.id);
    return true;
  }
}
