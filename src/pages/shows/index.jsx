import React from "react";
import pageTransition from "../../utils/pageTransition";

const Shows = () => {
  return (
    <main className="flex flex-col min-h-full md:mt-16 text-center p-3 text-black justify-center text-3xl">
      It's quiet... too quiet...
      <div className="hidden md:p-3"></div>
    </main>
  );
};

export default pageTransition(Shows);
