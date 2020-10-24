import { connection } from "../db";
import { Book } from "../entity/Book";

export class BookController {
  books: Array<IBook>;

  constructor() {
    this.books = books;
  }

  async getBooks(){
    return await connection.manager.find(Book)
  }
  async getBook(id: number) {
    return await connection.manager.findOne(Book, {
      where: { id: id },
    });
  }
  async saveBook(book: IBook) { 
    return await connection.manager.save(Book, book)
  }
  updateBook(id: number) { }
  deleteBook(id: number) { }
}

interface IBook {
  id?: number;
  title: string;
  author: string;
}

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    id: 3,
    title: 'A time for mercy',
    author: 'John Grisham',
  },
  {
    id: 4,
    title: 'Ready Player One',
    author: 'Ernest Cline',
  }
];