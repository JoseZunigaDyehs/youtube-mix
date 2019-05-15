export const vjActions = props => {
	return {
		searchYT: (mixId,videos) => {
			props.dispatch({ type: "SEARCH_END", data: {mixId,videos} })
		},
	}
}
