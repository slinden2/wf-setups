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

const HomePage = () => {
  const history = useHistory();
  const { setups, tracksAndVehicles } = useSetupContext()!;

  if (setups.loading || tracksAndVehicles.loading) {
    return <Loader text="Loading" />;
  }

  const setupArray = setups.data?.getSetups;

  const tracksForSelect = getSelectFieldData(
    tracksAndVehicles,
    InputType["tracks"]
  );
  const vehiclesForSelect = getSelectFieldData(
    tracksAndVehicles,
    InputType["vehicles"]
  );

  if (!setupArray || !tracksForSelect || !vehiclesForSelect) {
    return null;
  }

  const tableData: SetupRow[] = setupArray.map((setup) => ({
    id: setup.id,
    track: setup.track.name,
    vehicle: setup.vehicle.name,
    power: setup.power,
    suspension: setup.suspension,
    gear: setup.gear,
    differential: setup.differential,
    brake: setup.brake,
  }));

  const openSetup = (row: SetupRow) => {
    return history.push(`/setups/${row.id}`);
  };

  return (
    <div>
      <Title>Add Setup</Title>
      <AddSetupForm tracks={tracksForSelect!} vehicles={vehiclesForSelect!} />
      <StyledDataTable
        columns={columns}
        data={tableData}
        onRowClicked={(row) => openSetup(row)}
        pointerOnHover
        striped
        highlightOnHover
        dense
        noHeader
        responsive
      />
    </div>
  );
};

export default HomePage;
