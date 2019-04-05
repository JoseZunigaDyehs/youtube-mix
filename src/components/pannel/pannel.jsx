import React from "react";
import Mix from "../mix/mix";
// import Button from "../buttons/button";
// import ButtonLoad from "../buttons/button-load";
// import Pizzicato from "pizzicato";

/**
 * Tengo los dos players de youtube
 * y sus acciones
 * Todo se le pasa a Mix
 */

function Pannel(props) {

  function content() {
    return (
      <main
        className="pannel"
      >
        <Mix {...props}/>
      </main>
    );
  };

  return content();
}

export default Pannel;
