// import { combineReducers } from "redux";
import { currentUser } from "./currentUser";
import { notificationStates } from "./notification";
import { trackStates } from "./track";
import { searchStates } from "./search";

const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};
    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
    }
    return nextReducers;
  };
};

export const reducer = combineReducers({
  currentUser,
  notificationStates,
  trackStates,
  searchStates
});

//   export default combineReducers;
