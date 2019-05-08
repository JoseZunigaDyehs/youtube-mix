import React, { useMemo } from "react";
import PropTypes from "prop-types";
import VideoControl from './video-control';

// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function Video({ videoNumber, reference, player }) {

  const content = () => {
    return useMemo(() => {
      return (
        <div className={`mixtrack${videoNumber === 0 ? "" : " secondVideo"}`}>
          <div className="iframe">
            <div ref={reference} />
          </div>
          {/* <MixDuration /> */}
          <VideoControl player={player} videoNumber={videoNumber}/>
        </div>
      )
    }, [videoNumber, reference, player]);

    // );
  };
  return content();
}

export default Video;

Video.propTypes = {
  videoNumber: PropTypes.number.isRequired,
  reference: PropTypes.any.isRequided
};
