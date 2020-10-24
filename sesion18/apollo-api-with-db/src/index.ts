import { BookController } from "./controller/BookController";
import { typeDefs } from "./schema"
import { resolvers } from "./resolver"

const { ApolloServer, gql } = require('apollo-server');

const bookController: BookController = new BookController();

new ApolloServer({ typeDefs, resolvers })
  .listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });