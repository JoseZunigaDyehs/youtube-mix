export const vjActions = props => {
	return {
		searchYT: (mixId, videos) => {
			props.dispatch({ type: "SEARCH_END", data: { mixId, videos } })
		},
		addVideoToList: (listId, _video) => {
			const {
				id: { videoId },
				snippet: {
					title,
					thumbnails: {
						default: { url }
					}
				}
			} = _video
			const video = {
				videoId,
				title,
				url
			}
			props.dispatch({ type: "ADD_VIDEO_TO_LIST", data: { listId, video } })
		},
		removeVideoList: (listId, idVideo) => {
			props.dispatch({
				type: "REMOVE_VIDEO_TO_LIST",
				data: { listId, idVideo }
			})
		},
		updateVj: data => {
			props.dispatch({ type: "UPDATE_VJ", data })
		},
		updateColor: data => {
			props.dispatch({ type: "SET_COLOR", data })
		}
	}
}
