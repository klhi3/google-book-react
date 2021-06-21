const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID
 
    # Google Book API
    bookId: String

    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    books(title: String): [Book]
    book(book_Id: ID!): Book

    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(boodData: Book): User

    removeBook(bookId: ID!): User
    #removeBook(bookId: String): User
 }
`;

module.exports = typeDefs;
