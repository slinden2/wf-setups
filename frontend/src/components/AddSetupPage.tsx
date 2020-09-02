import React from "react";
import AddSetupForm from "./AddSetupForm";
import { useTracksAndVehiclesQuery } from "../generated/apolloComponents";
import { OptionType } from "../types/OptionType";

const AddSetupPage = () => {
  const { loading, data } = useTracksAndVehiclesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (
    !data?.getTracksAndVehicles.tracks.length ||
    !data?.getTracksAndVehicles.vehicles.length
  ) {
    throw new Error("No track or vehicle data found");
  }

  const tracks: OptionType[] = data.getTracksAndVehicles.tracks.map(
    (track) => ({
      value: track.id,
      label: track.name,
    })
  );

  const vehicles: OptionType[] = data.getTracksAndVehicles.vehicles.map(
    (track) => ({
      value: track.id,
      label: track.name,
    })
  );

  return <AddSetupForm tracks={tracks} vehicles={vehicles} />;
};

export default AddSetupPage;
