import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../interfaces/Book.interface';
import { CreateBookDTO } from '../dto/create-book.dto';

@Injectable()
export class BookService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) { }


    async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
        const newBook = await new this.bookModel(CreateBookDTO);
        return newBook.save();
    }

    async getBook(bookID): Promise<Book> {
        const book = await this.bookModel
            .findById(bookID)
            .exec();
        return book;
    }

    async editBook(bookID, createBookDTO: CreateBookDTO): Promise<Book> {
        const editedBook = await this.bookModel
            .findByIdAndUpdate(bookID, createBookDTO, { new: true });
        return editedBook;
    }
    async deleteBook(bookID): Promise<any> {
        const deletedBook = await this.bookModel
            .findByIdAndRemove(bookID);
        return deletedBook;
    }
}
