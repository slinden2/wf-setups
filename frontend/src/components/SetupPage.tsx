import React from "react";
import { useParams } from "react-router-dom";
import { useSetupContext } from "../context/SetupContext";

export const SetupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getSetup } = useSetupContext()!;
  const curSetup = getSetup(id);
  console.log(curSetup);

  return <div>{id}</div>;
};
