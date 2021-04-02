/**
 * Configuration of the Apollo Client to enable the use of GraphQL.
 */
import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

import { API_DOMAIN } from '@/config/globals';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // it is true when SSR
    link: new HttpLink({ uri: `${API_DOMAIN}/graphql` }),
    cache: new InMemoryCache()
  });
};

const initializeApolloClient = (initialState: any = null): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  //: initial state of Next.js data fetching methods is hydrated here
  if (initialState) {
    //: get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    //: restore the cache using the data passed from "getStaticProps" or
    //: "getServerSideProps" combined with the existing cache data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  //: for SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  //: create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

//: use this custom hook in your components to hydrate the state of the Apollo
//: Client
const useApolloClient = (initialState: any): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(
    () => initializeApolloClient(initialState),
    [initialState]
  );

  return store;
};

export { initializeApolloClient, useApolloClient };
