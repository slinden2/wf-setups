import React from "react";
import { useSetupContext } from "../context/SetupContext";
import Loader from "../styles/elements/Loader";
import { Title } from "../styles/elements/Title";
import StyledDataTable from "./table/StyledDataTable";
import { columns } from "./table/tableData";

const HomePage: React.FC = () => {
  const { getSetupSuggestions } = useSetupContext();

  const setups = getSetupSuggestions();

  if (setups.loading) {
    return <Loader text="Loading" />;
  }

  if (!setups.data) {
    return <div>Nothing to see here</div>;
  }

  const tableData = setups.data.map((setup) => ({
    ...setup,
    track: setup.track.name,
    vehicle: setup.vehicle.name,
  }));

  return (
    <div>
      <Title>Setup Suggestions</Title>
      <StyledDataTable
        columns={columns}
        data={tableData}
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
