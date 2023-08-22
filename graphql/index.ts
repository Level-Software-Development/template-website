import { BlockApp } from "./blockApp";
import { User } from "./user";

const apiCalls = {
  queries: {
    ...User.query,
    ...BlockApp.query,
  },
  mutations: {
    ...User.mutations,
    ...BlockApp.mutations,
  },
};

export default apiCalls;
