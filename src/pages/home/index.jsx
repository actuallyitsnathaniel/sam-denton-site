import React from "react";
import pageTransition from "../../utils/pageTransition";

// import { MusicLinks } from "../../components/music-embeds";
import samDentonLogo from "../../assets/images/samdentonstamplogo.png";

// TODO: look how to implement complex grain / particles with three js
// https://threejs.org/docs/#manual/en/introduction/How-to-use-post-processing

const Home = () => {
  return (
    <div className="fixed w-screen flex flex-col items-center">
      <img src={samDentonLogo} className="max-h-72 md:-translate-x-28" />
      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
    </div>
  );
};

export default pageTransition(Home);
