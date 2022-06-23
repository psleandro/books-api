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
import { BooksService } from './books.service';

@Controller('/Books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  getBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  findBook(@Param() findBookDto): Book {
    return this.booksService.findBook(Number(findBookDto.id));
  }

  @Post()
  createBooks(@Body() createBookDto: Book): Book {
    return this.booksService.createBook(createBookDto);
  }

  @Put()
  updateBooks(@Body() updateBookDto): Book {
    return this.booksService.updateBook(updateBookDto);
  }

  @Delete(':id')
  deleteBooks(@Param() deleteBookDto): boolean {
    return this.booksService.deleteBook(Number(deleteBookDto.id));
  }
}
