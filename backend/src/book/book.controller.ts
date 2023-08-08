import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from '../dto/create-book.dto';
    
@Controller('book')
export class BookController {
    
  constructor(private bookService: BookService) { }
    
  // Submit a book
  @Post('/book')
  async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
    const newBook = await this.bookService.addBook(createBookDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Book has been submitted successfully!',
      book: newBook,
    });
  }
}