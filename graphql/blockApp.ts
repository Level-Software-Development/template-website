import gql from "graphql-tag";

const blockApp = gql`
  query blockApp($input: BlockAppInput!) {
    blockApp(input: $input) {
      title
      message
    }
  }
`;

const query = { blockApp };
const mutations = {};
const BlockApp = { query, mutations };
export { BlockApp };
