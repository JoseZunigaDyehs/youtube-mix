import React, { useMemo } from "react";
import PropTypes from "prop-types";
import VideoControl from './video-control';

// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function Video({ mixId, reference, player }) {

  const content = () => {
    return useMemo(() => {
      return (
        <div className={`mixtrack${mixId === 0 ? "" : " secondVideo"}`}>
          <div className="iframe">
            <div ref={reference} />
          </div>
          {/* <MixDuration /> */}
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
