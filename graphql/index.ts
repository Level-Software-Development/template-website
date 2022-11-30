import { User } from "./user";

const apiCalls = {
  queries: {
    ...User.query,
  },
  mutations: {
    ...User.mutations,
  },
};

export default apiCalls;
