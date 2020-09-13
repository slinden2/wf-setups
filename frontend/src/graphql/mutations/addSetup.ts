import { gql } from "@apollo/client";

export const addSetupMutation = gql`
  mutation AddSetup(
    $trackId: Float!
    $vehicleId: Float!
    $suspension: Float!
    $gear: Float!
    $differential: Float!
    $brake: Float!
  ) {
    addSetup(
      data: {
        trackId: $trackId
        vehicleId: $vehicleId
        suspension: $suspension
        gear: $gear
        differential: $differential
        brake: $brake
      }
    ) {
      id
    }
  }
`;
