import _ from 'lodash'
export const vjStates =
	window.localStorage.getItem("ytMix")
		? JSON.parse(window.localStorage.getItem("ytMix")).vj
		: {
			mix: [0, 1],
			lists: [0],
			mixById: {
				0: {
					videoId: 0,
					color: "red",
					searchs: [
					],
				},
				1: {
					videoId: 0,
					color: "red",
					searchs: [
					],
				},
			},
			listsById: {
				0: {
					id: 0,
					name: "Primera lista",
					videos: [],
				},
			}
		}

export const vjReducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_END": {
			const { data: { mixId, videos } } = action
			const mix = state.mixById[mixId]
			mix.searchs = videos
			return { ...state, mix }
		}
		case "ADD_VIDEO_TO_LIST": {
			debugger
			const { data: { listId, video } } = action
			const list = state.listsById[listId]
			list.videos.push(video)
			return { ...state, list }
		}
		case "REMOVE_VIDEO_TO_LIST": {
			debugger
			const { data: { listId, idVideo } } = action
			const list = state.listsById[listId]
			const { videos } = list
			const _videos = videos.filter(video => video.id.videoId !== idVideo)
			list.videos = _videos
			return { ...state, list }
		}
		case "UPDATE_VJ": {
			debugger
			const _state = _.cloneDeep(state)
			debugger
			return {...state,  }
		}
		default:
			return state
	}
}
