import React, { Component } from "react";

class MixFader extends Component {
  toggleOver = () => {
    const { trackStates } = this.props;
    this.props.toggleFader(!trackStates.get("fader"));
  };
  content = () => {
    const style = {
      left: this.props.positionFader - 10,
      top: 0
    };
    const { trackStates } = this.props;
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
          this.toggleOver();
        }}
      />
    );
  };
  render = () => {
    return this.content();
  };
}

export default MixFader;
