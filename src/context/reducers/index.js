import { initialState } from "../states/initialState"
import { pannelReducer } from "./pannel"
import { vjReducer } from "./vj"

const reducer = (state = initialState, action) => {
	return {
		pannel: pannelReducer(state.pannel, action),
		vj: vjReducer(state.vj, action)
	}
}

export { initialState, reducer }
