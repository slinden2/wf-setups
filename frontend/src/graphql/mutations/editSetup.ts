import { gql } from "@apollo/client";

export const editSetupMutation = gql`
  mutation EditSetup(
    $id: Float!
    $power: String!
    $setup: String!
    $private: Boolean!
    $note: String
  ) {
    editSetup(
      data: {
        id: $id
        power: $power
        setup: $setup
        private: $private
        note: $note
      }
    ) {
      id
      power
      suspension
      gear
      differential
      brake
      private
      note
    }
  }
`;
