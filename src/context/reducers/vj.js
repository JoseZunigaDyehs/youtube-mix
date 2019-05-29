import _ from "lodash"
export const vjStates = window.localStorage.getItem("ytMix")
	? JSON.parse(window.localStorage.getItem("ytMix")).vj
	: {
		mix: [0, 1],
		lists: [0],
		mixById: {
			0: {
				videoId: 0,
				searchs: []
			},
			1: {
				videoId: 0,
				searchs: []
			}
		},
		listsById: {
			0: {
				id: 0,
				name: "Primera lista",
				videos: []
			}
		},
		colorVJ: {
			a: 100,
			b: 0,
			g: 0,
			h: 0,
			hex: "#000000",
			r: 0,
			s: 0,
			v: 0
		}
	  }

export const vjReducer = (state, action) => {
	switch (action.type) {
	case "SEARCH_END": {
		const {
			data: { mixId, videos }
		} = action
		const mix = state.mixById[mixId]
		mix.searchs = videos
		return { ...state, mix }
	}
	case "ADD_VIDEO_TO_LIST": {
		const {
			data: { listId, video }
		} = action
		const list = state.listsById[listId]
		list.videos.push(video)
		return { ...state }
	}
	case "REMOVE_VIDEO_TO_LIST": {
		const {
			data: { listId, idVideo }
		} = action
		const list = state.listsById[listId]
		const { videos } = list
		const _videos = videos.filter(video => video.videoId !== idVideo)
		list.videos = _videos
		return { ...state }
	}
	case "UPDATE_VJ": {
		const vj = action.data
		return { ...vj }
	}
	case "SET_COLOR": {
		const { data } = action
		const _state = _.cloneDeep(state)
		_.set(_state, "colorVJ", data)
		return {
			..._state
		}
	}
	default:
		return state
	}
}
