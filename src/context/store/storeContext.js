import { initialState, reducer } from "../reducers/index"
import { useActions } from "../actions/index"
import React, { createContext, useReducer, useEffect } from "react"

const StoreContext = createContext(initialState)

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const actions = useActions(state, dispatch)

	useEffect(() => {
		console.log({ newState: state })
		window.localStorage.setItem("ytMix", JSON.stringify(state))
	}, [state])

	return (
		<StoreContext.Provider value={{ state, dispatch, actions }}>
			{children}
		</StoreContext.Provider>
	)
}

export { StoreContext, StoreProvider }
