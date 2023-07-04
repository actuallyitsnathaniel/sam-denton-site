import React from "react";

import { MusicLinks } from "../../components/music-embeds";
import samFace from "../../assets/images/profiles/sam-face.svg";

const Home = () => {
  const youtubeID = "utRdyc6biHQ";

  return (
    <div className="grid text-white text-center place-content-around">
      <div className="grid grid-col text-center h-screen place-content-center mt-0 sm:mt-20">
        <img src={samFace} className="pb-10 md:pb-0"/>
        <h2 className="text-7xl flex-wrap md:text-8xl italic font-bold justify-center pb-48">
          sam denton
        </h2>
      </div>
      <p
        rel="preload prefetch"
        className="grid absolute bottom-0 m-auto left-0 right-0 text-8xl py-2 animate-bounce"
      >
        ↡
      </p>

      <iframe
        height={"315px"}
        rel="preload prefetch"
        className="m-auto md:w-[550px] h-[255px] md:h-[315px] rounded-2xl overflow-clip transition ease-in-out duration-75 hover:scale-105"
        src={`https://www.youtube-nocookie.com/embed/${youtubeID}?rel=0`}
        title="youtube embed"
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
      <div>
        <MusicLinks />
      </div>
    </div>
  );
};

export default Home;
