import * as Immutable from "immutable";

const video = {
  name: ""
};

export function searchStates(
  state = Immutable.fromJS({
    isFetching: false,
    isActive: false,
    videos: []
  }),
  action
) {
  switch (action.type) {
    case "TOGGLE_SEARCH":
      return state.set("isActive", !state.get("isActive"));
    case "SEARCH_END":
      return state.set("videos", Immutable.fromJS(action.data));
    default:
      return state;
  }
}
