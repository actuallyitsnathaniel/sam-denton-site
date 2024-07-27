import React from "react";
import pageTransition from "../../utils/pageTransition";

// import { MusicLinks } from "../../components/music-embeds";
import samDentonLogo from "../../assets/images/samdentonstamplogo.png";

// TODO: look how to implement complex grain / particles with three js
// https://threejs.org/docs/#manual/en/introduction/How-to-use-post-processing

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="flex justify-center items-center">
        <img src={samDentonLogo} className="max-h-72 self-center" />
      </h1>
    </div>
  );
};

export default pageTransition(Home);
