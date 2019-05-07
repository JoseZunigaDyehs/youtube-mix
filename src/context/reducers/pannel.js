export const pannelStates = {
    isFetching: true
  };
  
  export const pannelReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_VIDEOS_END":
        return { ...state, isFetching: false };
      default:
        return state;
    }
  };