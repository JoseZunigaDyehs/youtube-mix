import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import VideoControl from './video-control';
import VideoDuration from './video-duration';

// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
const Video = ({ mixId, reference, player, duration, start }) => {

  const content = () => {

    return useMemo(() => {
      return (
        <div className={`mix mix-track${mixId === 0 ? "" : " secondVideo"}`}>
          <div className="iframe">
            <div ref={reference} />
          </div>
          {/* <MixDuration /> */}
          <VideoDuration mixId={mixId} player={player} duration={duration} start={start}/>
          <VideoControl player={player} mixId={mixId}/>
        </div>
      )
    }, [reference, player, duration, start]);

    // );
  };
  return content();
}

export default Video;

Video.propTypes = {
  mixId: PropTypes.number.isRequired,
  reference: PropTypes.any.isRequided
};
