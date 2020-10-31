const { gql } = require("apollo-server");

export const Mutation = gql`
  type Mutation {
    saveUser(name:String, lastName:String, email:String!, password:String!, isAdmin:Boolean!): User
    deleteUser(id: Int): User
    updateUser(id:Int!, name:String, lastName:String, email:String, isAdmin:Boolean): User
  }
`;
