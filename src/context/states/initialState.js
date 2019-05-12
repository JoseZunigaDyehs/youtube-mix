import { mixStates } from "../reducers/mix";
import { pannelStates } from "../reducers/pannel";
import { vjStates } from "../reducers/vj";

const vj = {
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
      listById: [0],
    },
  },
}

export const initialState = {
  mix: mixStates,
  pannel: pannelStates,
  vj: vjStates
};
