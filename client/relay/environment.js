import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
} from 'relay-runtime';
import fetch from 'isomorphic-fetch';
import { GRAPHQL_URL } from 'client/constants';
import { minifyRelayQuery } from 'client/helpers';

const cache = new QueryResponseCache({size: 100, ttl: 60 * 5 * 1000});

const network = Network.create((operation, variables, cacheConfig) => {
  const queryId = operation.name;
  const cachedData = cache.get(queryId, variables);
  const forceLoad = cacheConfig && cacheConfig.force;

  if (!forceLoad && cachedData) {
    return cachedData;
  }

  if (forceLoad) {
    cache.clear();
  }

  return fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: minifyRelayQuery(operation.text),
      variables,
    }),
  }).then(response => {
    const data = response.json();
    cache.set(queryId, variables, data);
    return data;
  });
});

const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;