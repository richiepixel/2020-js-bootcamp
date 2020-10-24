import { BookController } from "../controller/BookController";

const bookController: BookController = new BookController();
export const resolvers = {
    Query: {
        book: (_, { id }) => bookController.getBook(id), //_ por el grafo padere
        books: () => bookController.getBooks(),
    },
    Mutation: {
        saveBook: (_, { title, author }) =>
          bookController.saveBook({ title, author }),
      },
};
