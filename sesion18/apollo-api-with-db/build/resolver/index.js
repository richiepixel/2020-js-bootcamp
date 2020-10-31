"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var BookController_1 = require("../controller/BookController");
var bookController = new BookController_1.BookController();
exports.resolvers = {
    Query: {
        book: function (_, _a) {
            var id = _a.id;
            return bookController.getBook(id);
        },
        books: function () { return bookController.getBooks(); },
    },
    Mutation: {
        saveBook: function (_, _a) {
            var title = _a.title, author = _a.author;
            return bookController.saveBook({ title: title, author: author });
        },
    },
};
//# sourceMappingURL=index.js.map