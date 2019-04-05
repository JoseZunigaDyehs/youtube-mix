import React from "react";
// import MixDuration from "./mix-duration";

function MixVideo (props) {
  function content() {
    const { trackStates, setSelected, videoNumber, reference } = props,
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
        {/* <MixDuration /> */}
      </div>
    );
  };
  return content();
}

export default MixVideo;
