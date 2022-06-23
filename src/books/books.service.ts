import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    try {
      return await this.bookModel.findAll();
    } catch (error) {
      throw new HttpException(
        'Internal error trying get all books',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findBook(id: number): Promise<Book> {
    try {
      return await this.bookModel.findByPk(id);
    } catch (error) {
      throw new HttpException(
        'Internal error trying find book',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createBook(createBookDto: Book): Promise<Book> {
    try {
      return await this.bookModel.create(createBookDto);
    } catch (error) {
      throw new HttpException(
        'Internal error trying create book',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateBook(updateBookDto: Book): Promise<Book> {
    try {
      const [updatedAmount] = await this.bookModel.update(updateBookDto, {
        where: {
          id: updateBookDto.id,
        },
      });

      if (updatedAmount < 1)
        throw new HttpException('Book not found.', HttpStatus.NOT_FOUND);

      return updateBookDto;
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException({ message: error.message }, error.getStatus());
      }

      throw new HttpException(
        'Internal error trying update book',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteBook(id: number): Promise<string> {
    try {
      const book: Book = await this.findBook(id);
      if (!book)
        throw new HttpException('Book not found.', HttpStatus.NOT_FOUND);

      book.destroy();

      return 'Book deleted with success.';
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException({ message: error.message }, error.getStatus());
      }

      throw new HttpException(
        'Internal error trying delete book.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
