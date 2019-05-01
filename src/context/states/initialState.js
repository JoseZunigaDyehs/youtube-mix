import { searchStates } from "../reducers/search";
import { trackStates } from "../reducers/track";
import { mixStates } from "../reducers/mix";

export const initialState = {
  search: searchStates,
  track: trackStates,
  mix: mixStates
};
