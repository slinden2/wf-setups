import { gql } from "@apollo/client";

export const addSetupMutation = gql`
  mutation AddSetup(
    $trackId: Float!
    $vehicleId: Float!
    $power: String!
    $suspension: Float!
    $gear: Float!
    $differential: Float!
    $brake: Float!
    $note: String
  ) {
    addSetup(
      data: {
        trackId: $trackId
        vehicleId: $vehicleId
        power: $power
        suspension: $suspension
        gear: $gear
        differential: $differential
        brake: $brake
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
