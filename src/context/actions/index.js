import { mixActions } from "./mix"
import { pannelActions } from "./pannel"
import { vjActions } from "./vj"

export const useActions = (state, dispatch) => {
	return {
		mix: mixActions({state,dispatch}),
		pannel: pannelActions({state,dispatch}),
		vj: vjActions({state,dispatch})
	}
}
