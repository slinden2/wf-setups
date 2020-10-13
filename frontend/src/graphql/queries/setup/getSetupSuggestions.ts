import { gql } from "@apollo/client";

export const getSetupSuggestionsQuery = gql`
  query GetSetupSuggestions {
    getSetupSuggestions {
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
