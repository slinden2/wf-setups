import { QueryResult } from "@apollo/client";
import React, { createContext, useContext } from "react";
import {
  Exact,
  GetSetupsQuery,
  Setup,
  Track,
  TracksAndVehiclesQuery,
  useGetSetupsQuery,
  useTracksAndVehiclesQuery,
} from "../generated/apolloComponents";

export type SetupContextProps = {
  tracksAndVehicles: QueryResult<
    TracksAndVehiclesQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
  setups: QueryResult<
    GetSetupsQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
  addSetup: () => Promise<void>;
  getSetup: (id: string) => Setup | null;
};

export const SetupContext = createContext<SetupContextProps | undefined>(
  undefined
);

type SetupProviderProps = {
  children: React.ReactNode;
};

export const SetupProvider: React.FC<SetupProviderProps> = ({
  children,
}: SetupProviderProps) => {
  const tracksAndVehicles = useTracksAndVehiclesQuery();
  const setups = useGetSetupsQuery();

  const addSetup = async () => {
    await setups.refetch();
  };

  const getSetup = (id: string) => {
    if (setups.data?.getSetups) {
      const setup = setups.data?.getSetups.find((setup) => setup.id === id);
      if (!setup) return null;

      return setup as Setup;
    }

    return null;
  };

  return (
    <SetupContext.Provider
      value={{
        tracksAndVehicles,
        setups,
        getSetup,
        addSetup,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export const useSetupContext = () => useContext(SetupContext);
