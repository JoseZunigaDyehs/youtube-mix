import React, {useMemo} from "react";
import PropTypes from 'prop-types';

function MixFader(props){
  const toggleOver = () =>  {
    const { trackStates, toggleFader } = props;
    toggleFader(!trackStates.get("fader"));
  };
  const content = () => {
    const {positionFader,trackStates} = props,
      style = {
      left: positionFader - 10,
      top: 0
    };
    if(trackStates.get("fader")){
      style.cursor = "col-resize";
    }else{
      style.cursor = "pointer";
    }
    return useMemo(() =>       <div
    style={style}
    className={trackStates.get("fader") ? "mixfader over" : "mixfader"}
    onClick={() => {
      toggleOver();
    }}
  />, [positionFader, trackStates])
  };
  
  return content();
  
}

export default MixFader;

MixFader.propTypes = {
  trackStates: PropTypes.any.isRequired,
  positionFader: PropTypes.number.isRequired
}