import { searchStates } from "../reducers/search";
import { mixStates } from "../reducers/mix";
import { pannelStates } from "../reducers/pannel";
import { videoMenuStates } from "../reducers/video-menu";

const vj = {
  mix: [0, 1],
  mixById: {
    0: {
      color: 'red',
      searchs: [
        {
          name: '',
          videoId: '',
          thumbnail: ''
        },
        {
          name: '',
          videoId: '',
          thumbnail: ''
        },
        {
          name: '',
          videoId: '',
          thumbnail: ''
        },
        {
          name: '',
          videoId: '',
          thumbnail: ''
        },
        {
          name: '',
          videoId: '',
          thumbnail: ''
        },
      ],
      lists: [
        {
          name: '',
          videos: [
            {
              name: '',
              videoId: '',
              thumbnail: ''
            },
            {
              name: '',
              videoId: '',
              thumbnail: ''
            },
            {
              name: '',
              videoId: '',
              thumbnail: ''
            },
          ],
        },
      ],
      videoId: 'aaaa',
    },
  },
}

export const initialState = {
  search: searchStates,
  mix: mixStates,
  pannel: pannelStates,
  videoMenu: videoMenuStates,
  vj
};
