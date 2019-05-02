import React, { useMemo, useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";

function MixFader() {
  const { state, actions } = useContext(StoreContext);

  const toggleOver = () => {
    const { mix } = state;
    actions.mix.toggleFader(!mix.fader);
  };

  const content = () => {
    // debugger
    const { mix } = state,
      style = {
        left: mix.positionFader - 10,
        bottom:  "calc(30% - 2rem)"
      };

    if (mix.fader) {
      style.cursor = "col-resize";
    } else {
      style.cursor = "pointer";
    }

    return useMemo(() => <div
      style={style}
      className={mix.fader ? "mixfader over" : "mixfader"}
      onClick={() => {
        toggleOver();
      }}
    />, [mix])
  };

  return content();

}

export default MixFader;