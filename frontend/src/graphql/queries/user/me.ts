import { gql } from "@apollo/client";

export const meQuery = gql`
  query Me {
    me {
      id
      discordId
      username
      email
    }
  }
`;
