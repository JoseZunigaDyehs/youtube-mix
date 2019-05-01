export const mixStates = {
  positionFader: window.innerWidth / 2 - 5,
  total: window.innerWidth,
  selected: 0,
  fader: false
};

export const mixReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSITION_FADER":
      return { ...state, positionFader: action.data}
    case "SET_FADER_MIX":
      return { ...state, fader: action.data}
    case "SET_SELECTED_TRACK":
      return { ...state, selected: action.data };
    case "TOGGLE_FADER":
      return { ...state, fader: action.data };
    
    default:
      return {...state};
  }
};
