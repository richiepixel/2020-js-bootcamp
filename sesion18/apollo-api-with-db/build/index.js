"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookController_1 = require("./controller/BookController");
var schema_1 = require("./schema");
var resolver_1 = require("./resolver");
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var bookController = new BookController_1.BookController();
new ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolver_1.resolvers })
    .listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
//# sourceMappingURL=index.js.map