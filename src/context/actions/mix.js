export const mixActions = props => {
  return {
    setPositionFaderMix: data => {
      props.dispatch({ type: "SET_POSITION_FADER", data });
    },
    setFaderMix: data => {
      props.dispatch({ type: "SET_FADER_MIX", data });
    },
    toggleFader: data => {
      props.dispatch({ type: "TOGGLE_FADER", data });
    },
  };
};
