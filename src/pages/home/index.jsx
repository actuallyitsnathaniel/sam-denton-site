import React from "react";

import { MusicLinks } from "../../components/music-embeds";
import SamFace from "../../assets/images/profiles/sam-face.jsx";

const Home = () => {
  const youtubeID = "utRdyc6biHQ";

  return (
    <div className="grid text-white text-center">
      <div className="grid h-screen justify-self-center">
      <SamFace className="sm:my-auto"/>
        <h2 className="text-6xl flex-wrap italic font-bold hidden sm:block">
          sam denton
        </h2>
        <p
        className="grid absolute bottom-0 m-auto left-0 right-0 text-5xl py-2 animate-bounce"
      >
        ↡
      </p>
      </div>

      <iframe
        height={"315px"}
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
