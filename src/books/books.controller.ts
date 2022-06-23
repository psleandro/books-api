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
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async findBook(@Param() findBookDto): Promise<Book> {
    return this.booksService.findBook(Number(findBookDto.id));
  }

  @Post()
  async createBooks(@Body() createBookDto: Book): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @Put()
  async updateBooks(@Body() updateBookDto): Promise<Book> {
    return this.booksService.updateBook(updateBookDto);
  }

  @Delete(':id')
  async deleteBooks(@Param() deleteBookDto): Promise<string> {
    return this.booksService.deleteBook(Number(deleteBookDto.id));
  }
}
