import { searchActions } from './search'
import { trackActions } from './track'
import { mixActions } from './mix'
import { pannelActions } from './pannel'
import { vjActions } from './vj'

export const useActions = (state, dispatch) => {
  return {
    search: searchActions({state,dispatch}),
    track: trackActions({state,dispatch}),
    mix: mixActions({state,dispatch}),
    pannel: pannelActions({state,dispatch}),
    vj: vjActions({state,dispatch})
  }
};
