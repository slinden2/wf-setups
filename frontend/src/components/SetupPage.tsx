import React from "react";
import { useParams } from "react-router-dom";
import { SetupRow } from "../types/SetupRow";

export const SetupPage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>{id}</div>;
};
