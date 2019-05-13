export const vjStates = {
    mix: [0, 1],
    mixById: {
        0: {
            videoId: 0,
            color: 'red',
            searchs: [
            ],
            searchById: [0, 1, 2, 3],
            lists: [
                {
                    id: 0,
                    name: '',
                    videosById: [0, 1, 2, 3],
                    videos: [
                    ],
                },
            ],
            listById: [0],
        },
        1: {
            videoId: 0,
            color: 'red',
            searchs: [
            ],
            searchById: [0, 1, 2, 3],
            lists: [
                {
                    id: 0,
                    name: '',
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
            const { mixId, videos } = action.data
            const mix = state.mixById[mixId]
            mix.searchs = videos
            return { ...state, mix };
        default:
            return state;
    }
};
