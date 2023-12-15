import { gql } from '@apollo/client';


export const AUTHENTICATE_USER_INPUT = gql`
  input AuthenticateInput {
    username: String!
    password: String!
  }
`;

export const CREATE_REVIEW_INPUT = gql`
  input CreateReviewInput {
    ownerName: String!
    repositoryName: String!
    rating: Int!
    text: String
  }
`

export const CREATE_USER_INPUT = gql`
  input CreateUserInput {
    user: String!
    password: String!
  }
`


export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      createdAt
      id
      rating
      repository {
        ownerName
        name
      }
      repositoryId
      text
      user {
        username
      }
      userId
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      createdAt
      id
      reviewCount
      username
    }
  }
` 