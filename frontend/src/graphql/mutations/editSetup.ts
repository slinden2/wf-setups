import { gql } from "@apollo/client";

export const editSetupMutation = gql`
  mutation EditSetup(
    $id: Float!
    $power: String!
    $suspension: Float!
    $gear: Float!
    $differential: Float!
    $brake: Float!
  ) {
    editSetup(
      data: {
        id: $id
        power: $power
        suspension: $suspension
        gear: $gear
        differential: $differential
        brake: $brake
      }
    ) {
      id
      power
      suspension
      gear
      differential
      brake
    }
  }
`;
