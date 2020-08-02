import { gql } from "@apollo/client";

export const meQuery = gql`
  query Me {
    me {
      firstName
      lastName
      name
      email
    }
  }
`;
