import React from "react";

import { MusicLinks } from ".//../../components/music-embeds";

const Home = () => {
  const youtubeID = "utRdyc6biHQ";

  return (
    <div className="grid text-white text-center place-content-around">
      <div className="grid grid-col text-center h-screen place-content-center">
        <h2 className="text-9xl justify-center md:pt-20 pb-48">sam denton</h2>
        
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
