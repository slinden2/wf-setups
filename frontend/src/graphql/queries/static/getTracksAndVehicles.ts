import { gql } from "@apollo/client";

export const getTracksAndVehiclesQuery = gql`
  query TracksAndVehicles {
    getTracksAndVehicles {
      tracks {
        id
        origin
        name
      }
      vehicles {
        id
        name
      }
    }
  }
`;
