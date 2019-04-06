import React, { useMemo } from "react";
import PropTypes from "prop-types";

function MixButons(props) {
  const content = () => {
    const {buttons} = props;
    return useMemo(() =>
      buttons.map((button, i) => {
        return (
          <div key={i} className={button.name.toLowerCase() + " button"}>
            <button
              onClick={() => {
                button.function();
              }}
            >
              {button.name}
            </button>
          </div>
        );
      })
    ,[buttons]);
  };
  return content();
}

export default MixButons;

MixButons.propTypes = {
  buttons: PropTypes.object.isRequired
};
