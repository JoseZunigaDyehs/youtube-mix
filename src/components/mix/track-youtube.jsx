import React, { Component } from "react";
import Youtube from "react-youtube";
let loadYT;
class TrackYT extends Component {
  componentDidUpdate = (prevProps) =>{
    debugger
  }
  componentDidMount = () => {
    if (!loadYT) {
      loadYT = new Promise(resolve => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    loadYT.then(YT => {
      this.player = new YT.Player(this.youtubePlayerAnchorOne, {
        videoId: "S-sJp1FfG7Q",
        height: this.props.height || 390,
        width: this.props.width || 640,
        events: {
          onStateChange: this.props.onPlayerStateChange
        }
      });
      this.playerTwo = new YT.Player(this.youtubePlayerAnchorTwo, {
        videoId: "S-sJp1FfG7Q",
        height: this.props.height || 390,
        width: this.props.width || 640,
        events: {
          onStateChange: this.props.onPlayerStateChange
        }
      });
    });
  };
  onPlayerStateChange = event => {
    debugger;
  };
  setSelected = () => {
    const { trackNumber } = this.props;
    this.props.setSelected(trackNumber);
  };

  content = () => {
    // const { trackStates, trackNumber } = this.props,
    //     selected = trackStates.get("selected"),
    //     trackState = trackNumber===0?trackStates.get("firstTrack"):trackStates.get("secondTrack"),
    //     videoId = trackState.get("videoId"),
    //     isPlaying = trackState.get("isPlaying");
    // let classSelected = selected===trackNumber?" selected": "";
    debugger;
    return (
      <div className="mixtrack">
        <div
          ref={r => {
            debugger
            this.youtubePlayerAnchorOne = r;
          }}
        />
                <div
          ref={r => {
            debugger
            this.youtubePlayerAnchorTwo = r;
          }}
        />
      </div>
    );
  };
  render = () => {
    return this.content();
  };
}

export default TrackYT;
