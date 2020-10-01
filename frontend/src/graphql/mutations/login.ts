import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation Login($code: String!) {
    login(code: $code) {
      id
      discordId
      username
    }
  }
`;
