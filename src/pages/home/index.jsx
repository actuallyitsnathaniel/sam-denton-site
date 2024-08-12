import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../utils/pageTransition";

// import { MusicLinks } from "../../components/music-embeds";
import samDentonLogo from "../../assets/images/samdentonstamplogo.png";
import ebba from "../../assets/images/discography/LPs/ebba_600x600bb.jpg";

// TODO: look how to implement complex grain / particles with three js
// https://threejs.org/docs/#manual/en/introduction/How-to-use-post-processing

const Home = () => {
  return (
    <div className="flex w-screen justify-stretch">
      <img
        src={samDentonLogo}
        className="md:absolute md:top-0 md:right-0 object-scale-down max-h-52"
      />

      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
    </div>
  );
};

export default pageTransition(Home);
