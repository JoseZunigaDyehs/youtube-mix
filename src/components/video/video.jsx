import React, { useMemo, useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";
import PropTypes from "prop-types";
import VideoButtons from './video-buttons';
// import MixDuration from "./mix-duration";

//Div que hace referencia al objeto padre (iframe API Youtube)
function Video(props) {
  const { state, actions } = useContext(StoreContext);
  
  const content = () => {
    const { videoNumber, reference } = props,
      { mix } = state,
      selected = mix.selected;
    //es como el shouldcomponentupdate, usa memo y le pasa los parámetros para comparar
    return useMemo(() => (
      <React.Fragment>

        <div
          className={`mixtrack${selected === videoNumber ? " selected" : ""}${
            videoNumber === 0 ? "" : " secondVideo"
            }`}
          onClick={() => {
            actions.mix.setSelected(videoNumber);
          }}
        >
          <div ref={reference} />
          {/* <MixDuration /> */}
        </div>
        <VideoButtons />
      </React.Fragment>
    ), [mix, videoNumber, reference]);

    // );
  };
  return content();
}

export default Video;

Video.propTypes = {
  videoNumber: PropTypes.number.isRequired,
  reference: PropTypes.any.isRequided
};