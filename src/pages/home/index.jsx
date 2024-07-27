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
    <div className="flex flex-grow flex-col w-screen items-center justify-stretch">
      <img src={samDentonLogo} className="max-h-72 md:-translate-x-28" />

      {/* <p>ebba out soon</p> */}
      <img id="ebba-cover" src={ebba} className="max-h-72" />

      <div className="flex-col text-center text-white" hidden>
        <h1 className="p-3 text-[150%] md:text-5xl  whitespace-nowrap">
          Upcoming Shows
        </h1>
      </div>
    </div>
  );
};

export default pageTransition(Home);
