import { gql } from "@apollo/client";

export const meQuery = gql`
  query Me {
    me {
      id
      discordId
      username
      email
      setups {
        id
        track {
          id
          name
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
  }
`;
