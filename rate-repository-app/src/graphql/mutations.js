import { gql } from '@apollo/client';


export const AUTHENTICATE_USER_INPUT = gql`
  input AuthenticateInput {
    username: String!
    password: String!
  }
`;


export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;