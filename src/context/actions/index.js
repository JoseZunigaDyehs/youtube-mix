import { pannelActions } from "./pannel"
import { vjActions } from "./vj"

export const useActions = (state, dispatch) => {
	return {
		pannel: pannelActions({ state, dispatch }),
		vj: vjActions({ state, dispatch })
	}
}
