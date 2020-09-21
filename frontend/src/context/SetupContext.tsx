import { FetchResult, QueryResult } from "@apollo/client";
import React, { createContext, useContext } from "react";
import {
  AddSetupMutation,
  AddSetupMutationOptions,
  DeleteSetupMutation,
  DeleteSetupMutationOptions,
  GetSetupsQuery,
  GetSetupsQueryVariables,
  Setup,
  TracksAndVehiclesQuery,
  TracksAndVehiclesQueryVariables,
  useAddSetupMutation,
  useDeleteSetupMutation,
  useGetSetupsQuery,
  useTracksAndVehiclesQuery,
} from "../generated/apolloComponents";
import { getSetupsQuery } from "../graphql/queries/setup/getSetups";

export type SetupContextProps = {
  tracksAndVehicles: QueryResult<
    TracksAndVehiclesQuery,
    TracksAndVehiclesQueryVariables
  >;
  setups: QueryResult<GetSetupsQuery, GetSetupsQueryVariables>;
  addSetup: (
    options?: AddSetupMutationOptions
  ) => Promise<
    FetchResult<AddSetupMutation, Record<string, any>, Record<string, any>>
  >;
  deleteSetup: (
    options?: DeleteSetupMutationOptions
  ) => Promise<
    FetchResult<DeleteSetupMutation, Record<string, any>, Record<string, any>>
  >;
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

  const [addSetup] = useAddSetupMutation({
    update: (cache, response) => {
      const setupsInCache = cache.readQuery({ query: getSetupsQuery }) as {
        getSetups: Array<Setup>;
      };

      if (response.data?.addSetup) {
        cache.writeQuery({
          query: getSetupsQuery,
          data: {
            getSetups: [...setupsInCache.getSetups, response.data.addSetup],
          },
        });
      }
    },
  });

  const [deleteSetup] = useDeleteSetupMutation({
    update: (cache, response) => {
      const setupsInCache = cache.readQuery({ query: getSetupsQuery }) as {
        getSetups: Array<Setup>;
      };

      if (response.data?.deleteSetup) {
        cache.writeQuery({
          query: getSetupsQuery,
          data: {
            getSetups: setupsInCache.getSetups.filter(
              (setup) => Number(setup.id) !== response.data?.deleteSetup
            ),
          },
        });
      }
    },
  });

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
        deleteSetup,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export const useSetupContext = () => useContext(SetupContext);
