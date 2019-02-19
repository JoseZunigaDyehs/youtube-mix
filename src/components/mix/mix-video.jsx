import React, { Component } from "react";
import MixDuration from "./mix-duration";

class MixVideo extends Component {
  content = () => {
    const { trackStates, setSelected, videoNumber, reference } = this.props,
    selected = trackStates.get("selected");
    return (
        <div
        className={`mixtrack${
          selected === videoNumber ? " selected" : ""
        }${
            videoNumber === 0 ? "":" secondVideo"
        }`}
        onClick={() => {
          setSelected(videoNumber);
        }}
      >
        <div
          ref={reference}
        />
        <MixDuration />
      </div>
    );
  };
  render = () => {
    return this.content();
  };
}

export default MixVideo;
