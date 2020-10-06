import { FetchResult, QueryResult } from "@apollo/client";
import React, { createContext, useContext } from "react";
import {
  AddSetupMutation,
  AddSetupMutationOptions,
  DeleteSetupMutation,
  DeleteSetupMutationOptions,
  EditSetupMutation,
  EditSetupMutationOptions,
  GetSetupsQuery,
  GetSetupsQueryVariables,
  Setup,
  TracksAndVehiclesQuery,
  TracksAndVehiclesQueryVariables,
  useAddSetupMutation,
  useDeleteSetupMutation,
  useEditSetupMutation,
  useGetSetupsQuery,
  useTracksAndVehiclesQuery,
} from "../generated/apolloComponents";
import { getSetupsQuery } from "../graphql/queries/setup/getSetups";
import { GetSetupsQueryCache } from "../types/GetSetupsQueryCache";
import { SetupWithLoading } from "../types/SetupWithLoading";

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
  editSetup: (
    options?: EditSetupMutationOptions
  ) => Promise<
    FetchResult<EditSetupMutation, Record<string, any>, Record<string, any>>
  >;
  getSetup: (id: string) => SetupWithLoading;
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
      const setupsInCache = cache.readQuery({
        query: getSetupsQuery,
      }) as GetSetupsQueryCache;

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
      const setupsInCache = cache.readQuery({
        query: getSetupsQuery,
      }) as GetSetupsQueryCache;

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

  const [editSetup] = useEditSetupMutation({
    update: (cache, response) => {
      const setupsInCache = cache.readQuery({
        query: getSetupsQuery,
      }) as GetSetupsQueryCache;

      if (response.data?.editSetup) {
        const setupToEdit = setupsInCache.getSetups.find(
          (setup) => setup.id === response.data?.editSetup?.id
        );

        if (setupToEdit) {
          const editedSetup = { ...setupToEdit, ...response.data.editSetup };

          cache.writeQuery({
            query: getSetupsQuery,
            data: {
              getSetups: [
                ...setupsInCache.getSetups.filter(
                  (setup) => setup.id !== setupToEdit.id
                ),
                editedSetup,
              ],
            },
          });
        }
      }
    },
  });

  const getSetup = (id: string) => {
    if (setups.loading) return { loading: true, data: null };

    if (setups.data?.getSetups) {
      const setup = setups.data?.getSetups.find((setup) => setup.id === id);
      if (!setup) return { loading: false, data: null };

      return { loading: false, data: setup as Setup };
    }

    return { loading: false, data: null };
  };

  return (
    <SetupContext.Provider
      value={{
        tracksAndVehicles,
        setups,
        getSetup,
        addSetup,
        deleteSetup,
        editSetup,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export const useSetupContext = () => useContext(SetupContext);
