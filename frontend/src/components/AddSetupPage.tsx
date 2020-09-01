import React from "react";
import AddSetupForm from "./AddSetupForm";
import { useTracksAndVehiclesQuery } from "../generated/apolloComponents";

const AddSetupPage = () => {
  const { loading, data } = useTracksAndVehiclesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AddSetupForm
      tracks={data?.getTracksAndVehicles.tracks}
      vehicles={data?.getTracksAndVehicles.vehicles}
    />
  );
};

export default AddSetupPage;
