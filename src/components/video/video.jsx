import React, { useMemo, useContext } from "react";
import PropTypes from "prop-types";
import VideoControl from './video-control';
// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function Video(props) {

  const content = () => {
    const { videoNumber, reference, player } = props;
    return useMemo(() => {
      return (
        <div className={`mixtrack${videoNumber === 0 ? "" : " secondVideo"}`}>
          <div ref={reference} />
          {/* <MixDuration /> */}
          <VideoControl player={player}/>
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
