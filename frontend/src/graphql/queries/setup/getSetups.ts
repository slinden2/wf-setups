import { gql } from "@apollo/client";

export const getSetupsQuery = gql`
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
      note
    }
  }
`;
