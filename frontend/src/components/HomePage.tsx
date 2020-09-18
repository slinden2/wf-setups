import React from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

import AddSetupForm from "./AddSetupForm";
import { useSetupContext } from "../context/SetupContext";
import { SetupRow } from "../types/SetupRow";
import { getSelectFieldData } from "../utils/getSelectFieldData";

const columns = [
  {
    name: "Track",
    selector: "track",
    sortable: true,
  },
  {
    name: "Vehicle",
    selector: "vehicle",
    sortable: true,
  },
  {
    name: "Power",
    selector: "power",
  },
  {
    name: "Suspension",
    selector: "suspension",
    center: true,
  },
  {
    name: "Gears",
    selector: "gear",
    center: true,
  },
  {
    name: "Differential",
    selector: "differential",
    center: true,
  },
  {
    name: "Brake",
    selector: "brake",
    center: true,
  },
];

const HomePage = () => {
  const history = useHistory();
  const { setups, tracks, vehicles } = useSetupContext()!;

  if (!tracks || !vehicles) {
    return <div>Loading...</div>;
  }

  const tracksForSelect = getSelectFieldData(tracks);
  const vehiclesForSelect = getSelectFieldData(vehicles);

  if (!setups) {
    return null;
  }

  const tableData: SetupRow[] = setups.map((setup) => ({
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
      <AddSetupForm tracks={tracksForSelect} vehicles={vehiclesForSelect} />
      <DataTable
        columns={columns}
        data={tableData}
        onRowClicked={(row) => openSetup(row)}
        pointerOnHover
        striped
        highlightOnHover
        dense
      />
    </div>
  );
};

export default HomePage;
