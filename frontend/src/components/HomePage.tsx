import React from "react";
import { useHistory } from "react-router-dom";

import AddSetupForm from "./AddSetupForm";
import { useSetupContext } from "../context/SetupContext";
import { SetupRow } from "../types/SetupRow";
import { getSelectFieldData, InputType } from "../utils/getSelectFieldData";
import { columns } from "./table/tableData";
import StyledDataTable from "./table/StyledDataTable";
import { Title } from "../styles/elements/Title";
import Loader from "../styles/elements/Loader";
import SetupFilters from "./SetupFilters";

const HomePage = () => {
  const history = useHistory();
  const { getSetups, tracksAndVehicles, showModTracks } = useSetupContext();

  const filteredSetups = getSetups();

  if (filteredSetups.loading || tracksAndVehicles.loading) {
    return <Loader text="Loading" />;
  }

  const setupToShow = filteredSetups.data;

  const tracksForSelect = getSelectFieldData(
    tracksAndVehicles,
    InputType["tracks"]
  );

  const vehiclesForSelect = getSelectFieldData(
    tracksAndVehicles,
    InputType["vehicles"]
  );

  if (!tracksForSelect || !vehiclesForSelect) {
    return null;
  }

  const tracksToShow = showModTracks
    ? tracksForSelect
    : tracksForSelect.filter((track) => track.origin === "Vanilla");

  let tableData: SetupRow[] | [] = [];

  if (!setupToShow) {
    tableData = [];
  } else {
    tableData = setupToShow.map((setup) => ({
      ...setup,
      track: setup.track.name,
      vehicle: setup.vehicle.name,
    }));
  }

  const openSetup = (row: SetupRow) => {
    return history.push(`/setups/${row.id}`);
  };

  return (
    <div>
      <Title>Add Setup</Title>
      <AddSetupForm tracks={tracksToShow} vehicles={vehiclesForSelect!} />
      <Title>Setups</Title>
      <SetupFilters />
      <StyledDataTable
        columns={columns}
        data={tableData}
        onRowClicked={(row) => openSetup(row)}
        pointerOnHover
        striped
        noHeader
        highlightOnHover
        dense
        responsive
      />
    </div>
  );
};

export default HomePage;
