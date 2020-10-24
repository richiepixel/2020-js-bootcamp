const { gql } = require("apollo-server");

export const Query = gql`
  type Query {
    book(id:Int!): Book,
    books: [Book],
    }
`;
