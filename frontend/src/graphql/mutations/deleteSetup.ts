import { gql } from "@apollo/client";

export const deleteSetupMutation = gql`
  mutation DeleteSetup($id: Float!) {
    deleteSetup(id: $id)
  }
`;
