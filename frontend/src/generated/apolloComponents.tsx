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
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  discordId: Scalars['String'];
  username: Scalars['String'];
  discriminator: Scalars['String'];
  avatar: Scalars['String'];
  email: Scalars['String'];
};

export type TracksAndVehicles = {
  __typename?: 'TracksAndVehicles';
  tracks: Array<Track>;
  vehicles: Array<Vehicle>;
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

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<User>;
};


export type MutationLoginArgs = {
  code: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'discordId' | 'username' | 'email'>
  )> }
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
    & Pick<User, 'id' | 'discordId' | 'username' | 'email'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($code: String!) {
  login(code: $code) {
    id
    discordId
    username
    email
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
    email
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