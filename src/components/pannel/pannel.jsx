import React from "react";
import Mix from "../mix/mix";
// import Button from "../buttons/button";
// import ButtonLoad from "../buttons/button-load";
// import Pizzicato from "pizzicato";

function Pannel() {
  const content = () => {
    return (
      <main
        className="pannel"
      >
        <Mix/>
      </main>
    );
  };

  return content();
}

export default Pannel;
