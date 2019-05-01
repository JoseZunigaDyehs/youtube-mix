export const trackActions = props => {
  return {
    loadTrackStart: data => {
      props.dispatch({ type: "LOAD_TRACK_START", data });
    },
    loadTrack: data => {
      props.dispatch({ type: "LOAD_TRACK_END", data });
    },
    setPlaying: data => {
      props.dispatch({ type: "SET_PLAYING_TRACK", data });
    },
    pause: () => {
      props.dispatch({ type: "PAUSE_TRACK" });
    },
  };
};
