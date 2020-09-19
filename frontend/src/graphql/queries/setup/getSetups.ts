import { gql } from "@apollo/client";

export const meQuery = gql`
  query GetSetups {
    getSetups {
      id
      track {
        id
        name
        origin
      }
      vehicle {
        id
        name
      }
      power
      suspension
      gear
      differential
      brake
    }
  }
`;
