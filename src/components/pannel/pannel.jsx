import React from "react";
import Mix from "../mix/mix";

const Pannel = () => {
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
