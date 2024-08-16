import React from "react";
import pageTransition from "../../utils/pageTransition";

// import { MusicLinks } from "../../components/music-embeds";
// import samDentonLogo from "../../assets/images/samdentonstamplogo.png";
import ebba from "../../assets/images/discography/LPs/ebba_600x600bb.jpg";

// TODO: look how to implement complex grain / particles with three js
// https://threejs.org/docs/#manual/en/introduction/How-to-use-post-processing

const Home = () => {
  return (
    <div className="flex flex-col w-screen justify-stretch">
      <div className="flex-col text-center text-black">
        <h1 className="p-3 md:text-5xl hidden whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
    </div>
  );
};

export default pageTransition(Home);
