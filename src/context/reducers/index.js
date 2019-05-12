import { initialState } from "../states/initialState";
import { searchReducer } from "./search";
import { mixReducer } from "./mix";
import { pannelReducer } from "./pannel";
import { videoMenuReducer } from "./video-menu";
import { vjReducer } from "./vj";

const reducer = (state = initialState, action) => {
  return {
    search: searchReducer(state.search, action),
    mix: mixReducer(state.mix, action),
    pannel: pannelReducer(state.pannel, action),
    videoMenu: videoMenuReducer(state.videoMenu, action),
    vj: vjReducer(state.vj, action)
  };
};

export { initialState, reducer };
