import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "@apollo/client";

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`,
});

const link = authLink.concat(httpLink);

export { link };
