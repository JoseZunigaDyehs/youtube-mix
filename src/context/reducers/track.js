const track = {
  isActive: false,
  isPlaying: false,
  videoId: "S-sJp1FfG7Q",
  isLoading: false,
  gain: 50
};

export const trackStates = {
  positionFader: 0,
  firstTrack: track,
  secondTrack: {}
};

export const trackReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TRACK_START":
      if (state.selected === 0) {
        let newState = state.secondTrack;
        newState.isLoading = true;
        return { ...state, secondTrack: newState };
      } else {
        let newState = state.firstTrack;
        newState.isLoading = true;
        return { ...state, firstTrack: newState };
      }
    case "LOAD_TRACK_END":
      if (state.selected === 0) {
        let newState = state.secondTrack;
        newState.videoId = action.data;
        newState.isLoading = false;
        return { ...state, secondTrack: newState };
      } else {
        let newState = state.firstTrack;
        newState.videoId = action.data;
        newState.isLoading = false;
        return { ...state, firstTrack: newState };
      }
    case "PAUSE_TRACK":
      if (state.selected === 0) {
        let newState = state.secondTrack;
        newState.isPLaying = false;
        return { ...state, secondTrack: newState };
      } else {
        let newState = state.firstTrack;
        newState.isPLaying = false;
        return { ...state, firstTrack: newState };
      }
    case "SET_PLAYING_TRACK":
      if (state.selected === 0) {
        let newState = state.secondTrack;
        newState.isPLaying = true;
        return { ...state, secondTrack: newState };
      } else {
        let newState = state.firstTrack;
        newState.isPLaying = true;
        return { ...state, firstTrack: newState };
      }
    case "SET_GAIN":
      if (state.selected === 0) {
        let newState = state.secondTrack;
        newState.gain = true;
        return { ...state, secondTrack: newState };
      } else {
        let newState = state.firstTrack;
        newState.gain = true;
        return { ...state, firstTrack: newState };
      }
    default:
      return state;
  }
};
