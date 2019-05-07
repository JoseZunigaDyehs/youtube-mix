export const mixStates = {
  positionFader: 400 / 2 + 2,
  total: 400,
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
