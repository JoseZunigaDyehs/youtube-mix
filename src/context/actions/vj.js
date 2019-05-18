export const vjActions = props => {
	return {
		searchYT: (mixId,videos) => {
			props.dispatch({ type: "SEARCH_END", data: {mixId,videos} })
		},
		addVideoToList: (listId,video) => {
			props.dispatch({ type: "ADD_VIDEO_TO_LIST", data: {listId,video} })
		},
		removeVideoList: (listId,idVideo) => {
			props.dispatch({ type: "REMOVE_VIDEO_TO_LIST", data: {listId,idVideo} })
		},
		updateVj: (data) => {
			props.dispatch({ type: "UPDATE_VJ", data })
		},
	}
}
