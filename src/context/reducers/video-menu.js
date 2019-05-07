export const videoMenuStates = {
    isOpenOne: true,
    isOpenTwo: true,
  };
  
  export const videoMenuReducer= (state, action) => {
    switch (action.type) {
      case "OPEN_MENU":
        return { ...state, [action.payload]: !state[action.payload] };
      default:
        return state;
    }
  };