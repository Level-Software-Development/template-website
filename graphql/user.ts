import gql from "graphql-tag";

const user = gql`
  query user($input: UserInput!) {
    user(input: $input) {
      firstName
    }
  }
`;

const query = { user };
const mutations = {};
const User = { query, mutations };
export { User };
