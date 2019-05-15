import { initialState } from "../states/initialState"
import { mixReducer } from "./mix"
import { pannelReducer } from "./pannel"
import { vjReducer } from "./vj"

const reducer = (state = initialState, action) => {
	return {
		mix: mixReducer(state.mix, action),
		pannel: pannelReducer(state.pannel, action),
		vj: vjReducer(state.vj, action)
	}
};

export { initialState, reducer }
