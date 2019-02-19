import React, { Component } from "react";
import Mix from "../mix/mix";
// import Button from "../buttons/button";
// import ButtonLoad from "../buttons/button-load";
// import Pizzicato from "pizzicato";

/**
 * Tengo los dos players de youtube
 * y sus acciones
 * Todo se le pasa a Mix
 */

class Pannel extends Component {

  content = () => {
    return (
      <div
        className="pannel"
      >
        <Mix {...this.props}/>
      </div>
    );
  };

  render = () => {
    return this.content();
  };
}

export default Pannel;
