import React, { createContext, useContext } from "react";
import { SetupState } from "../types/SetupState";
import { useAuthContext } from "./AuthContext";

export type SetupContextProps = {
  setups: SetupState[] | null;
  addSetup: (newSetup: SetupState) => void;
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
  const { user } = useAuthContext();
  const [setups, setSetups] = React.useState<SetupState[] | null>(null);

  React.useEffect(() => {
    if (user?.setups) {
      setSetups(user.setups);
    }
  }, [user]);

  const addSetup = (newSetup: SetupState) => {
    if (setups) {
      setSetups([...setups, newSetup]);
    } else {
      setSetups([newSetup]);
    }
  };

  return (
    <SetupContext.Provider value={{ setups, addSetup }}>
      {children}
    </SetupContext.Provider>
  );
};

export const useSetupContext = () => useContext(SetupContext);
