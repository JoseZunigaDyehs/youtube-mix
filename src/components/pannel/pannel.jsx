import React from "react";
import Mix from "../mix/mix";
// import Button from "../buttons/button";
// import ButtonLoad from "../buttons/button-load";
// import Pizzicato from "pizzicato";

function Pannel(props) {

  const content = () => {
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
