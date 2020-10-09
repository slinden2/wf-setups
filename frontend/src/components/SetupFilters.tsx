import React from "react";
import styled from "styled-components";
import Select, { ValueType } from "react-select";
import { selectStyleFn } from "./form/selectStyleFn";
import { useThemeContext } from "../context/ThemeContext";
import { useSetupContext } from "../context/SetupContext";
import { MyOptionType } from "../types/OptionType";
import { getSelectFieldData, InputType } from "../utils/getSelectFieldData";
import Loader from "../styles/elements/Loader";
import { Button } from "../styles/elements/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    max-width: 400px;
    padding: 0;
    align-self: flex-start;
    margin-right: 1rem;
    flex: 2 0 100%;
  }
`;

const SetupFilters: React.FC = () => {
  const theme = useThemeContext();
  const {
    getAllSetups,
    tracksAndVehicles,
    filterByTrack,
    filterByVehicle,
    resetFilters,
  } = useSetupContext()!;
  const [
    selectedTrackFilter,
    setSelectedTrackFilter,
  ] = React.useState<MyOptionType | null>(null);
  const [
    selectedVehicleFilter,
    setSelectedVehicleFilter,
  ] = React.useState<MyOptionType | null>(null);

  const allSetups = getAllSetups();

  if (allSetups.loading || tracksAndVehicles.loading) {
    return <Loader text="Loading" />;
  }

  const handleResetFilters = () => {
    setSelectedTrackFilter(null);
    setSelectedVehicleFilter(null);
    resetFilters();
  };

  const handleFilterOnChange = (
    type: "track" | "vehicle",
    selectedOption: ValueType<MyOptionType>
  ) => {
    if (!selectedOption || "length" in selectedOption) {
      throw new Error(
        "Unexpected type passed to react-select onChange handler"
      );
    }

    if (type === "track") {
      setSelectedTrackFilter(selectedOption);
      filterByTrack(selectedOption.value);
    } else if (type === "vehicle") {
      setSelectedVehicleFilter(selectedOption);
      filterByVehicle(selectedOption.value);
    }
  };

  const setupsForFilters = allSetups.data;

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

  let trackFilters: MyOptionType[] = [];
  let vehicleFilters: MyOptionType[] = [];

  if (setupsForFilters) {
    trackFilters = tracksForSelect.filter((track) =>
      setupsForFilters.find((item) => item.track.id === track.value)
    );

    vehicleFilters = vehiclesForSelect.filter((vehicle) =>
      setupsForFilters.find((item) => item.vehicle.id === vehicle.value)
    );
  }

  return (
    <Container>
      <div>
        <Select
          value={selectedTrackFilter}
          options={trackFilters}
          placeholder="Filter by track"
          styles={selectStyleFn({ isError: false, theme })}
          onChange={(selectedOption) =>
            handleFilterOnChange("track", selectedOption)
          }
        />
        <Select
          value={selectedVehicleFilter}
          options={vehicleFilters}
          placeholder="Filter by vehicle"
          styles={selectStyleFn({ isError: false, theme })}
          onChange={(selectedOption) =>
            handleFilterOnChange("vehicle", selectedOption)
          }
        />
      </div>
      <Button onClick={() => handleResetFilters()} colorType="secondary">
        Reset Filters
      </Button>
    </Container>
  );
};

export default SetupFilters;
