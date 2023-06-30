import React from "react";

import SpotifyEmbed from "./spotify";
import AppleMusicEmbed from "./apple-music";
import TidalEmbed from "./tidal";

export function MusicLinks() {
  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold pl-2.6 pr-2.6 h-max">
      <div className="p-6 text-center whitespace-nowrap">
        listen anywhere
      </div>
      <div className="flex flex-wrap justify-center drop-shadow-xl">
        <SpotifyEmbed />
        <AppleMusicEmbed />
        <TidalEmbed />
      </div>
    </div>
  );
}