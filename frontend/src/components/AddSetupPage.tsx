import React from "react";
import AddSetupForm from "./AddSetupForm";
import { useTracksAndVehiclesQuery } from "../generated/apolloComponents";

const AddSetupPage = () => {
  const test = useTracksAndVehiclesQuery();
  console.log(test);

  return <AddSetupForm />;
};

export default AddSetupPage;
