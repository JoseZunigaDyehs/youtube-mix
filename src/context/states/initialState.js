import { searchStates } from "../reducers/search";
import { mixStates } from "../reducers/mix";
import { pannelStates } from "../reducers/pannel";
import { videoMenuStates } from "../reducers/video-menu";

export const initialState = {
  search: searchStates,
  mix: mixStates,
  pannel: pannelStates,
  videoMenu: videoMenuStates
};
