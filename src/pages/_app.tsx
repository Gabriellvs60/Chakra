/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from "@apollo/client";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import "lib/styles/globals.css";
import { apolloClient } from "lib/config/apollo";
import { messagesBr } from "lib/locales/br";
import { messagesEn } from "lib/locales/en";
import type { BrowserLanguageType } from "lib/utils/getUserLanguage";
import { getUserLanguage } from "lib/utils/getUserLanguage";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [browserLocale, setBroserLocale] = useState({
    locale: "en",
    language: "en",
  });

  const messages: { [key: string]: Record<string, string> } = {
    pt: messagesBr,
    en: messagesEn,
  };

  useEffect(() => {
    const browserLanguage: BrowserLanguageType = getUserLanguage();
    setBroserLocale(browserLanguage);
  }, []);

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
        <IntlProvider
          locale={browserLocale.language}
          messages={messages[browserLocale.locale]}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </ApolloProvider>
    </Chakra>
  );
};

export default MyApp;
