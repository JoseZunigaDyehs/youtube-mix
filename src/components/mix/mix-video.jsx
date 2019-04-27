import React, { useMemo } from "react";
import PropTypes from "prop-types";
// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function MixVideo(props) {
  const content = () => {
    debugger
    const { trackStates, setSelected, videoNumber, reference } = props,
      selected = trackStates.get("selected");
    //es como el shouldcomponentupdate, usa memo y le pasa los parámetros para comparar
    return useMemo(() => (
      <div
        className={`mixtrack${selected === videoNumber ? " selected" : ""}${
          videoNumber === 0 ? "" : " secondVideo"
        }`}
        onClick={() => {
          setSelected(videoNumber);
        }}
      >
        <div ref={reference} />
        {/* <MixDuration /> */}
      </div>
    ),[trackStates,setSelected,videoNumber,reference]);

    // );
  };
  return content();
}

export default MixVideo;

MixVideo.propTypes = {
  trackStates: PropTypes.any.isRequired,
  setSelected: PropTypes.func.isRequired,
  videoNumber: PropTypes.number.isRequired,
  reference: PropTypes.any.isRequided
};
