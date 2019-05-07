import { searchStates } from "../reducers/search";
import { trackStates } from "../reducers/track";
import { mixStates } from "../reducers/mix";
import { pannelStates } from "../reducers/pannel";

export const initialState = {
  search: searchStates,
  track: trackStates,
  mix: mixStates,
  pannel: pannelStates
};
