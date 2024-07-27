import React from "react";
import pageTransition from "../../utils/pageTransition";

const Secret = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-4xl text-black">
      <h1>👀</h1>
    </div>
  );
};

export default pageTransition(Secret);
