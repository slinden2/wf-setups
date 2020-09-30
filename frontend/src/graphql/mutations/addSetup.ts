import { gql } from "@apollo/client";

export const addSetupMutation = gql`
  mutation AddSetup(
    $trackId: Float!
    $vehicleId: Float!
    $power: String!
    $setup: String!
    $note: String
  ) {
    addSetup(
      data: {
        trackId: $trackId
        vehicleId: $vehicleId
        power: $power
        setup: $setup
        note: $note
      }
    ) {
      id
      power
      suspension
      gear
      differential
      brake
      note
      track {
        id
        name
        origin
      }
      vehicle {
        id
        name
      }
    }
  }
`;
