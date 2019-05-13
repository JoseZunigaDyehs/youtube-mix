import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import VideoControl from './video-control';
import {VideoDuration} from './video-duration';

// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function Video({ mixId, reference, player }) {

  const content = () => {
    
    return useMemo(() => {
      return (
        <div className={`mix mix-track${mixId === 0 ? "" : " secondVideo"}`}>
          <div className="iframe">
            <div ref={reference} />
          </div>
          {/* <MixDuration /> */}
          <VideoDuration></VideoDuration>
          <VideoControl player={player} mixId={mixId}/>
        </div>
      )
    }, [mixId, reference, player]);

    // );
  };
  return content();
}

export default Video;

Video.propTypes = {
  mixId: PropTypes.number.isRequired,
  reference: PropTypes.any.isRequided
};
