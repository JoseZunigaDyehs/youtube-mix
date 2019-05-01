export const searchStates = {
  video: { name: "" },
  isFetching: false,
  isActive: false,
  videos: []
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH":
      return { ...state, isActive: !state.isActive };
    case "SEARCH_END":
      return { ...state, videos: action.data };
    default:
      return state;
  }
};
