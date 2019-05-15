export const pannelActions = props => {
	return {
		loadVideosStart: () => {
			props.dispatch({ type: "LOAD_VIDEOS_START" })
		},
		loadVideosEnd: () => {
			props.dispatch({ type: "LOAD_VIDEOS_END" })
		},
	}
}
  