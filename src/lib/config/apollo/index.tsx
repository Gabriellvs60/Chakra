import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import type { ApolloProviderProps } from "@apollo/client/react/context/ApolloProvider";
// import createUploadLink from "apollo-upload-client/public/createUploadLink.js";

import { getCookie } from "lib/components/utils/cookies";

const setAuthorizationLink = setContext(() => {
  const token = getCookie(null, "authToken");
  if (token) {
    return {
      headers: {
        authorization: `Bearer ${getCookie(null, "authToken")}`,
      },
    };
  }
  return {};
});

// const uploadLink = createUploadLink({
//   uri: process.env.NEXT_PUBLIC_API_URL,
//   fetch,
// });

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  ssrMode: !process.browser,
  // link: setAuthorizationLink.concat(uploadLink),
  link: setAuthorizationLink,
});

export const CustomApolloProvider = ({
  children,
}: ApolloProviderProps<unknown>) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
