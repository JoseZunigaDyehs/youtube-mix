export const searchActions = props => {
  return {
    searchYT: data => {
      props.dispatch({ type: "SEARCH_END", data });
    },
    toggleSearch: data => {
      props.dispatch({ type: "TOGGLE_SEARCH", data });
    },
    load: data => {
      props.dispatch({ type: "SEARCH_END", data });
    },
    setVideos: data => {
      props.dispatch({ type: "SEARCH_END", data });
    }
  };
};
