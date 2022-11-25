import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache } from '@apollo/client';
import authLink from './links/auth-link';
import { mergeDeep } from '@apollo/client/utilities';
import errorLink from './links/error-link';

type CacheState = Record<string, any> | null;

const cache = new InMemoryCache();

const link: unknown = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'same-origin',
});

function createApolloClient() {
  return new ApolloClient({
    link: from([errorLink, authLink, link as ApolloLink]),
    cache: cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
  });
}

let apolloClient: ApolloClient<CacheState>;

export function initializeApollo(initialState: CacheState = null): ApolloClient<CacheState> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = mergeDeep(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

apolloClient = initializeApollo({});

export function useApollo(): ApolloClient<CacheState> {
  return apolloClient;
}
