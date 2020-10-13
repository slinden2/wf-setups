import React from "react";
import { useSetupContext } from "../context/SetupContext";
import Loader from "../styles/elements/Loader";
import { Title } from "../styles/elements/Title";
import { StyledInput } from "./form/InputField";
import StyledDataTable from "./table/StyledDataTable";
import { columns } from "./table/tableData";

const HomePage: React.FC = () => {
  const [searchStr, setSearchStr] = React.useState<string>("");
  const { getSetupSuggestions } = useSetupContext();

  console.log(searchStr);

  const setups = getSetupSuggestions();

  if (setups.loading) {
    return <Loader text="Loading" />;
  }

  if (!setups.data) {
    return <div>Nothing to see here</div>;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };

  const tableData = setups.data.map((setup) => ({
    ...setup,
    track: setup.track.name,
    vehicle: setup.vehicle.name,
  }));

  return (
    <div>
      <Title>Setup Suggestions</Title>
      <StyledInput
        name="search"
        placeholder="Search setups..."
        maxWidth="400px"
        marginBottom="1rem"
        onChange={(e) => handleSearch(e)}
        value={searchStr}
      />
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
