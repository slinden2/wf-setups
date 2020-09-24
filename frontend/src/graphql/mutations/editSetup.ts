import { gql } from "@apollo/client";

export const editSetupMutation = gql`
  mutation EditSetup(
    $id: Float!
    $power: String!
    $setup: String!
    $note: String
  ) {
    editSetup(data: { id: $id, power: $power, setup: $setup, note: $note }) {
      id
      power
      suspension
      gear
      differential
      brake
      note
    }
  }
`;
