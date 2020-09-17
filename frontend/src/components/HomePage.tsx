import React from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";

import { useTracksAndVehiclesQuery } from "../generated/apolloComponents";
import AddSetupForm from "./AddSetupForm";
import { OptionType } from "../types/OptionType";
import { useSetupContext } from "../context/SetupContext";
import { SetupRow } from "../types/SetupRow";

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
  const { loading, data } = useTracksAndVehiclesQuery();
  const { setups } = useSetupContext()!;

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
      <AddSetupForm tracks={tracks} vehicles={vehicles} />
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
