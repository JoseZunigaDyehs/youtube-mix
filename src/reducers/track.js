import * as Immutable from "immutable";

const track = {
  isActive: false,
  isPlaying: false,
  videoId: "S-sJp1FfG7Q",
  isLoading: false,
  gain: 50
};

export function trackStates(
  state = Immutable.fromJS({
    fader: false,
    selected: 0,
    positionFader:0,
    firstTrack: track,
    secondTrack: {}
  }),
  action
) {
  switch (action.type) {
    case "LOAD_TRACK_START":
      if (state.get("selected") === 0) {
        return state.withMutations(map => {
          map.setIn(["firstTrack", "isLoading"], true);
        });
      } else {
        return state.withMutations(map => {
          map.setIn(["secondTrack", "isLoading"], true);
        });
      }
    case "LOAD_TRACK_END":
      if (state.get("selected") === 0) {
        return state.withMutations(map => {
          map
            .setIn(["firstTrack", "videoId"], action.data)
            .setIn(["firstTrack", "isLoading"], false);
        });
      } else {
        return state.withMutations(map => {
          map
            .setIn(["secondTrack", "videoId"], action.data)
            .setIn(["secondTrack", "isLoading"], false);
        });
      }
    case "PAUSE_TRACK":
      if (state.get("selected") === 0) {
        return state.withMutations(map => {
          map.setIn(["firstTrack", "isPLaying"], false);
        });
      } else {
        return state.withMutations(map => {
          map.setIn(["secondTrack", "isPLaying"], false);
        });
      }
    case "SET_PLAYING_TRACK":
      return state.withMutations(map => {
        if (action.data === 0) {
          map.setIn(["firstTrack", "isPlaying"], true);
        } else {
          map.setIn(["secondTrack", "isPlaying"], true);
        }
      });
    case "SET_GAIN":
    return state.withMutations(map => {
      if (action.data === 0) {
        map.setIn(["firstTrack", "gain"], true);
      } else {
        map.setIn(["secondTrack", "gain"], true);
      }
    });
    case "SET_SELECTED_TRACK":
      return state.withMutations(map => {
        map.set("selected", action.data);
      });
    case "TOGGLE_FADER":
      return state.withMutations(map => {
        map.set("fader", action.data);
      });
    default:
      return state;
  }
}
