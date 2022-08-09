import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { config } from "../env";
import { getCookie } from "lib/utils/cookies";

const httpLink = createHttpLink({
  uri: config.API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = getCookie(null, "authToken");

  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
  return {};
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
