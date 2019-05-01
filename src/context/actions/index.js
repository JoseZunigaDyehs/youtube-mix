import { searchActions } from './search'
import { trackActions } from './track'
import { mixActions } from './mix'

export const useActions = (state, dispatch) => {
  return {
    search: searchActions({state,dispatch}),
    track: trackActions({state,dispatch}),
    mix: mixActions({state,dispatch}),
  }
};
