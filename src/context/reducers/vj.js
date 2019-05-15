export const vjStates =
	window.localStorage.getItem("ytMix") 
		? JSON.parse(window.localStorage.getItem("ytMix")).vj
		: {
			mix: [0, 1],
			mixById: {
				0: {
					videoId: 0,
					color: "red",
					searchs: [
					],
					lists: [
						{
							id: 0,
							name: "",
							videosById: [0, 1, 2, 3],
							videos: [
							],
						},
					],
					listById: [0],
				},
				1: {
					videoId: 0,
					color: "red",
					searchs: [
					],
					lists: [
						{
							id: 0,
							name: "",
							videosById: [0, 1, 2, 3],
							videos: [
							],
						},
					],
					listById: [0],
				},
			},
		}

export const vjReducer = (state, action) => {
	switch (action.type) {
	case "SEARCH_END":
		debugger
		const { data: { mixId, videos } } = action
		const mix = state.mixById[mixId]
		mix.searchs = videos
		return { ...state, mix }
	default:
		return state
	}
}
