import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0";

import "../styles/globals.css";
import useClient from "../util/client";
import { DefaultSeo } from "next-seo";

const MyApp = (value: AppProps): JSX.Element => {
  return (
    <UserProvider>
      <MyAppLayout {...value} />
    </UserProvider>
  );
};

const MyAppLayout = ({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element => {
  const AppComponent = Component as any;
  const client = useClient();

  return (
    <>
      <DefaultSeo
        title="Website"
        description="Website Description."
        canonical="Link to website."
        openGraph={{
          url: "Link to website.",
          title: "Website",
          description: "Website Description.",
          images: [
            {
              url: "Website Image Preview Link",
              alt: "Website",
              type: "image/jpeg",
            },
          ],
          site_name: "Website",
        }}
      />

      <ApolloProvider client={client}>
        <AppComponent {...pageProps} key={router.route} />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
