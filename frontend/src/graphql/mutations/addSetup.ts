import { gql } from "@apollo/client";

export const addSetupMutation = gql`
  mutation AddSetup(
    $trackId: Float!
    $vehicleId: Float!
    $power: String!
    $setup: String!
    $private: Boolean!
    $note: String
  ) {
    addSetup(
      data: {
        trackId: $trackId
        vehicleId: $vehicleId
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
