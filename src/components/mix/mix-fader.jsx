import React from "react";

function MixFader(props){
  function toggleOver() {
    const { trackStates } = props;
    props.toggleFader(!trackStates.get("fader"));
  };
  function content() {
    const style = {
      left: props.positionFader - 10,
      top: 0
    };
    const { trackStates } = props;
    if(trackStates.get("fader")){
      style.cursor = "col-resize";
    }else{
      style.cursor = "pointer";
    }
    return (
      <div
        style={style}
        className={trackStates.get("fader") ? "mixfader over" : "mixfader"}
        onClick={() => {
          toggleOver();
        }}
      />
    );
  };
  
  return content();
  
}

export default MixFader;
