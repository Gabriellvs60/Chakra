/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from "@apollo/client";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { IntlProvider } from "react-intl";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import "lib/styles/globals.css";
import { apolloClient } from "lib/config/apollo";
import { messagesEn } from "lib/locales/en";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <ApolloProvider client={apolloClient}>
        <IntlProvider locale="en" messages={messagesEn}>
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>
    </Chakra>
  );
};

export default MyApp;
