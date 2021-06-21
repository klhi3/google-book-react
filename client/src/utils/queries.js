import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      books {
        _id
        bookId
        title
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query geBooks {
    books {
      _id
      bookId
      description
      title
      image
      link
    }
  }
`;


export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      books {
        _id
        bookId
        description
        title
        image
        link
      }
    }
  }
`;
