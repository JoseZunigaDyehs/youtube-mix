import { initialState } from "../states/initialState";
import { searchReducer } from "./search";
import { trackReducer } from "./track";
import { mixReducer } from "./mix";
import { pannelReducer } from "./pannel";

const reducer = (state = initialState, action) => {
  return {
    search: searchReducer(state.search, action),
    track: trackReducer(state.track, action),
    mix: mixReducer(state.mix, action),
    pannel: pannelReducer(state.pannel, action)
  };
};

export { initialState, reducer };
