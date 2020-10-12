import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<User>;
  getTracksAndVehicles: TracksAndVehicles;
  getSetups?: Maybe<Array<Setup>>;
  getSetupSuggestions?: Maybe<Array<SetupSuggestion>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  discordId: Scalars['String'];
  username: Scalars['String'];
  discriminator: Scalars['String'];
  avatar: Scalars['String'];
  setups: Array<Setup>;
};

export type Setup = {
  __typename?: 'Setup';
  id: Scalars['ID'];
  power: Scalars['String'];
  suspension: Scalars['Float'];
  gear: Scalars['Float'];
  differential: Scalars['Float'];
  brake: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  track: Track;
  vehicle: Vehicle;
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  trackId: Scalars['String'];
  origin: Scalars['String'];
  name: Scalars['String'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  id: Scalars['ID'];
  vehicleId: Scalars['String'];
  vehicleFolder: Scalars['String'];
  name: Scalars['String'];
};

export type TracksAndVehicles = {
  __typename?: 'TracksAndVehicles';
  tracks: Array<Track>;
  vehicles: Array<Vehicle>;
};

export type SetupSuggestion = {
  __typename?: 'SetupSuggestion';
  power: Scalars['String'];
  suspension: Scalars['Float'];
  gear: Scalars['Float'];
  differential: Scalars['Float'];
  brake: Scalars['Float'];
  track: Track;
  vehicle: Vehicle;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<User>;
  addSetup?: Maybe<Setup>;
  deleteSetup?: Maybe<Scalars['Float']>;
  editSetup?: Maybe<Setup>;
};


export type MutationLoginArgs = {
  code: Scalars['String'];
};


export type MutationAddSetupArgs = {
  data: AddSetupInput;
};


export type MutationDeleteSetupArgs = {
  id: Scalars['Float'];
};


export type MutationEditSetupArgs = {
  data: EditSetupInput;
};

export type AddSetupInput = {
  power: Scalars['String'];
  setup: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  trackId: Scalars['Float'];
  vehicleId: Scalars['Float'];
};

export type EditSetupInput = {
  power: Scalars['String'];
  setup: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};

export type BaseSetupInput = {
  power: Scalars['String'];
  setup: Scalars['String'];
  note?: Maybe<Scalars['String']>;
};

export type AddSetupMutationVariables = Exact<{
  trackId: Scalars['Float'];
  vehicleId: Scalars['Float'];
  power: Scalars['String'];
  setup: Scalars['String'];
  note?: Maybe<Scalars['String']>;
}>;


export type AddSetupMutation = (
  { __typename?: 'Mutation' }
  & { addSetup?: Maybe<(
    { __typename?: 'Setup' }
    & Pick<Setup, 'id' | 'power' | 'suspension' | 'gear' | 'differential' | 'brake' | 'note'>
    & { track: (
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'name' | 'origin'>
    ), vehicle: (
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'id' | 'name'>
    ) }
  )> }
);

export type DeleteSetupMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteSetupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteSetup'>
);

export type EditSetupMutationVariables = Exact<{
  id: Scalars['Float'];
  power: Scalars['String'];
  setup: Scalars['String'];
  note?: Maybe<Scalars['String']>;
}>;


export type EditSetupMutation = (
  { __typename?: 'Mutation' }
  & { editSetup?: Maybe<(
    { __typename?: 'Setup' }
    & Pick<Setup, 'id' | 'power' | 'suspension' | 'gear' | 'differential' | 'brake' | 'note'>
  )> }
);

export type LoginMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'discordId' | 'username'>
  )> }
);

export type GetSetupSuggestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSetupSuggestionsQuery = (
  { __typename?: 'Query' }
  & { getSetupSuggestions?: Maybe<Array<(
    { __typename?: 'SetupSuggestion' }
    & Pick<SetupSuggestion, 'power' | 'suspension' | 'gear' | 'differential' | 'brake'>
    & { track: (
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'name' | 'origin'>
    ), vehicle: (
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'id' | 'name'>
    ) }
  )>> }
);

export type GetSetupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSetupsQuery = (
  { __typename?: 'Query' }
  & { getSetups?: Maybe<Array<(
    { __typename?: 'Setup' }
    & Pick<Setup, 'id' | 'power' | 'suspension' | 'gear' | 'differential' | 'brake' | 'note'>
    & { track: (
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'name' | 'origin'>
    ), vehicle: (
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'id' | 'name'>
    ) }
  )>> }
);

export type TracksAndVehiclesQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksAndVehiclesQuery = (
  { __typename?: 'Query' }
  & { getTracksAndVehicles: (
    { __typename?: 'TracksAndVehicles' }
    & { tracks: Array<(
      { __typename?: 'Track' }
      & Pick<Track, 'id' | 'origin' | 'name'>
    )>, vehicles: Array<(
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'id' | 'name'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'discordId' | 'username'>
  )> }
);


export const AddSetupDocument = gql`
    mutation AddSetup($trackId: Float!, $vehicleId: Float!, $power: String!, $setup: String!, $note: String) {
  addSetup(data: {trackId: $trackId, vehicleId: $vehicleId, power: $power, setup: $setup, note: $note}) {
    id
    power
    suspension
    gear
    differential
    brake
    note
    track {
      id
      name
      origin
    }
    vehicle {
      id
      name
    }
  }
}
    `;
export type AddSetupMutationFn = ApolloReactCommon.MutationFunction<AddSetupMutation, AddSetupMutationVariables>;

/**
 * __useAddSetupMutation__
 *
 * To run a mutation, you first call `useAddSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSetupMutation, { data, loading, error }] = useAddSetupMutation({
 *   variables: {
 *      trackId: // value for 'trackId'
 *      vehicleId: // value for 'vehicleId'
 *      power: // value for 'power'
 *      setup: // value for 'setup'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useAddSetupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSetupMutation, AddSetupMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSetupMutation, AddSetupMutationVariables>(AddSetupDocument, baseOptions);
      }
export type AddSetupMutationHookResult = ReturnType<typeof useAddSetupMutation>;
export type AddSetupMutationResult = ApolloReactCommon.MutationResult<AddSetupMutation>;
export type AddSetupMutationOptions = ApolloReactCommon.BaseMutationOptions<AddSetupMutation, AddSetupMutationVariables>;
export const DeleteSetupDocument = gql`
    mutation DeleteSetup($id: Float!) {
  deleteSetup(id: $id)
}
    `;
export type DeleteSetupMutationFn = ApolloReactCommon.MutationFunction<DeleteSetupMutation, DeleteSetupMutationVariables>;

/**
 * __useDeleteSetupMutation__
 *
 * To run a mutation, you first call `useDeleteSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSetupMutation, { data, loading, error }] = useDeleteSetupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSetupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSetupMutation, DeleteSetupMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteSetupMutation, DeleteSetupMutationVariables>(DeleteSetupDocument, baseOptions);
      }
export type DeleteSetupMutationHookResult = ReturnType<typeof useDeleteSetupMutation>;
export type DeleteSetupMutationResult = ApolloReactCommon.MutationResult<DeleteSetupMutation>;
export type DeleteSetupMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteSetupMutation, DeleteSetupMutationVariables>;
export const EditSetupDocument = gql`
    mutation EditSetup($id: Float!, $power: String!, $setup: String!, $note: String) {
  editSetup(data: {id: $id, power: $power, setup: $setup, note: $note}) {
    id
    power
    suspension
    gear
    differential
    brake
    note
  }
}
    `;
export type EditSetupMutationFn = ApolloReactCommon.MutationFunction<EditSetupMutation, EditSetupMutationVariables>;

/**
 * __useEditSetupMutation__
 *
 * To run a mutation, you first call `useEditSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSetupMutation, { data, loading, error }] = useEditSetupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      power: // value for 'power'
 *      setup: // value for 'setup'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useEditSetupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditSetupMutation, EditSetupMutationVariables>) {
        return ApolloReactHooks.useMutation<EditSetupMutation, EditSetupMutationVariables>(EditSetupDocument, baseOptions);
      }
export type EditSetupMutationHookResult = ReturnType<typeof useEditSetupMutation>;
export type EditSetupMutationResult = ApolloReactCommon.MutationResult<EditSetupMutation>;
export type EditSetupMutationOptions = ApolloReactCommon.BaseMutationOptions<EditSetupMutation, EditSetupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($code: String!) {
  login(code: $code) {
    id
    discordId
    username
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetSetupSuggestionsDocument = gql`
    query GetSetupSuggestions {
  getSetupSuggestions {
    track {
      id
      name
      origin
    }
    vehicle {
      id
      name
    }
    power
    suspension
    gear
    differential
    brake
  }
}
    `;

/**
 * __useGetSetupSuggestionsQuery__
 *
 * To run a query within a React component, call `useGetSetupSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSetupSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSetupSuggestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSetupSuggestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSetupSuggestionsQuery, GetSetupSuggestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSetupSuggestionsQuery, GetSetupSuggestionsQueryVariables>(GetSetupSuggestionsDocument, baseOptions);
      }
export function useGetSetupSuggestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSetupSuggestionsQuery, GetSetupSuggestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSetupSuggestionsQuery, GetSetupSuggestionsQueryVariables>(GetSetupSuggestionsDocument, baseOptions);
        }
export type GetSetupSuggestionsQueryHookResult = ReturnType<typeof useGetSetupSuggestionsQuery>;
export type GetSetupSuggestionsLazyQueryHookResult = ReturnType<typeof useGetSetupSuggestionsLazyQuery>;
export type GetSetupSuggestionsQueryResult = ApolloReactCommon.QueryResult<GetSetupSuggestionsQuery, GetSetupSuggestionsQueryVariables>;
export const GetSetupsDocument = gql`
    query GetSetups {
  getSetups {
    id
    track {
      id
      name
      origin
    }
    vehicle {
      id
      name
    }
    power
    suspension
    gear
    differential
    brake
    note
  }
}
    `;

/**
 * __useGetSetupsQuery__
 *
 * To run a query within a React component, call `useGetSetupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSetupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSetupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSetupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSetupsQuery, GetSetupsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSetupsQuery, GetSetupsQueryVariables>(GetSetupsDocument, baseOptions);
      }
export function useGetSetupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSetupsQuery, GetSetupsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSetupsQuery, GetSetupsQueryVariables>(GetSetupsDocument, baseOptions);
        }
export type GetSetupsQueryHookResult = ReturnType<typeof useGetSetupsQuery>;
export type GetSetupsLazyQueryHookResult = ReturnType<typeof useGetSetupsLazyQuery>;
export type GetSetupsQueryResult = ApolloReactCommon.QueryResult<GetSetupsQuery, GetSetupsQueryVariables>;
export const TracksAndVehiclesDocument = gql`
    query TracksAndVehicles {
  getTracksAndVehicles {
    tracks {
      id
      origin
      name
    }
    vehicles {
      id
      name
    }
  }
}
    `;

/**
 * __useTracksAndVehiclesQuery__
 *
 * To run a query within a React component, call `useTracksAndVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTracksAndVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTracksAndVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTracksAndVehiclesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TracksAndVehiclesQuery, TracksAndVehiclesQueryVariables>) {
        return ApolloReactHooks.useQuery<TracksAndVehiclesQuery, TracksAndVehiclesQueryVariables>(TracksAndVehiclesDocument, baseOptions);
      }
export function useTracksAndVehiclesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TracksAndVehiclesQuery, TracksAndVehiclesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TracksAndVehiclesQuery, TracksAndVehiclesQueryVariables>(TracksAndVehiclesDocument, baseOptions);
        }
export type TracksAndVehiclesQueryHookResult = ReturnType<typeof useTracksAndVehiclesQuery>;
export type TracksAndVehiclesLazyQueryHookResult = ReturnType<typeof useTracksAndVehiclesLazyQuery>;
export type TracksAndVehiclesQueryResult = ApolloReactCommon.QueryResult<TracksAndVehiclesQuery, TracksAndVehiclesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    discordId
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;