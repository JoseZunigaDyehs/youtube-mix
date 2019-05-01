import { initialState } from "../states/initialState";
import { searchReducer } from "./search";
import { trackReducer } from "./track";
import { mixReducer } from "./mix";

const reducer = (state = initialState, action) => {
  return {
    search: searchReducer(state.search, action),
    track: trackReducer(state.track, action),
    mix: mixReducer(state.mix, action),
  };
};

export { initialState, reducer };
