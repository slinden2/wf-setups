import React, { createContext, useContext } from "react";
import { useTracksAndVehiclesQuery } from "../generated/apolloComponents";
import { SetupState } from "../types/SetupState";
import { TrackState } from "../types/TrackState";
import { VehicleState } from "../types/VehicleState";
import { useAuthContext } from "./AuthContext";

export type SetupContextProps = {
  tracks: TrackState[] | null;
  vehicles: VehicleState[] | null;
  setups: SetupState[] | null;
  addSetup: (newSetup: SetupState) => void;
  getSetup: (id: string) => SetupState | null;
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
  const { loading, error, data } = useTracksAndVehiclesQuery();
  const { user } = useAuthContext();
  const [setups, setSetups] = React.useState<SetupState[] | null>(null);
  const [tracks, setTracks] = React.useState<TrackState[] | null>(null);
  const [vehicles, setVehicles] = React.useState<VehicleState[] | null>(null);

  React.useEffect(() => {
    if (user?.setups) {
      setSetups(user.setups);
    }
  }, [user]);

  React.useEffect(() => {
    if (!loading && !error) {
      if (data?.getTracksAndVehicles.tracks) {
        setTracks(data?.getTracksAndVehicles.tracks);
      }
    }
  }, [loading, error, data]);

  React.useEffect(() => {
    if (!loading && !error) {
      if (data?.getTracksAndVehicles.vehicles) {
        setVehicles(data?.getTracksAndVehicles.vehicles);
      }
    }
  }, [loading, error, data]);

  const addSetup = (newSetup: SetupState) => {
    if (setups) {
      setSetups([...setups, newSetup]);
    } else {
      setSetups([newSetup]);
    }
  };

  const getSetup = (id: string) => {
    const setup = setups?.find((setup) => setup.id === id);

    if (!setup) return null;

    return setup;
  };

  return (
    <SetupContext.Provider
      value={{ setups, addSetup, getSetup, tracks, vehicles }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export const useSetupContext = () => useContext(SetupContext);
