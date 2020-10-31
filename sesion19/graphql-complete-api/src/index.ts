require('dotenv').config()
import { typeDefs } from "./schema"
import { resolvers } from "./resolver"

console.log(`JWT_SECRET: ${process.env.JWT_SECRET}`);

const { ApolloServer } = require('apollo-server');

new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return { token: req.headers.authorization || '' }
  }
}).listen(3003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});