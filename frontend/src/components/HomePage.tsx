import React from "react";
import { useSetupContext } from "../context/SetupContext";
import { Title } from "../styles/elements/Title";

const HomePage: React.FC = () => {
  const { getSetupSuggestions } = useSetupContext();

  const setups = getSetupSuggestions();
  console.log(setups);

  return (
    <div>
      <Title>Setups</Title>
    </div>
  );
};

export default HomePage;
