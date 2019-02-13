import React, { Component } from "react";
import Youtube from "react-youtube";

class MixTrackYT extends Component {
  setSelected = () => {
    const {trackNumber} = this.props;
    this.props.setSelected(trackNumber);
  };

  content = () => {
    const { trackStates, trackNumber } = this.props,
        selected = trackStates.get("selected"),
        trackState = trackNumber===0?trackStates.get("firstTrack"):trackStates.get("secondTrack"),
        videoId = trackState.get("videoId"),
        isPlaying = trackState.get("isPlaying");
    let classSelected = selected===trackNumber?" selected": "";
    return (
      <div className={`mixtrack${classSelected}`}
      onClick={()=>{this.setSelected()}}>
        <Youtube
          className="mixtrackyt"
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
                volume:2,
              autoplay: isPlaying?1:0,
              controls: 0,
              rel: 0,
              iv_load_policy: 3,
            }
          }}
        />
      </div>
    );
  };
  render = () => {
    return this.content();
  };
}

export default MixTrackYT;
