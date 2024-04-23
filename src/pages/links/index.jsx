import React from "react";
import { Link } from "react-router-dom";

import InstagramLogo from "../../components/social-links/instagram-link";
import GmailLogo from "../../components/social-links/gmail-link";
import SpotifyLink from "../../components/social-links/spotify-link";
import AppleMusic from "../../components/social-links/apple-music-link";
import YoutubeLogo from "../../components/social-links/youtube-link";

const Links = () => {
  return (
    <div className="text-center text-black justify-between">
      <Link exact="true" to={"/home"}>
        <div className="mx-auto pt-16">
          <h1 className="text-9xl">SAM DENTON</h1>
        </div>
      </Link>
      <h1 className="text-[200%] md:text-6xl py-6 font-semibold italic">
        links
      </h1>
      <div className="flex flex-wrap justify-center px-8">
        <div className="px-6">
          <SpotifyLink />
        </div>
        <div className="px-6">
          <AppleMusic />
        </div>
        <div className="px-6">
          <YoutubeLogo />
        </div>
        <div className="px-6">
          <InstagramLogo />
        </div>
        <div className="px-6">
          <GmailLogo />
        </div>
      </div>
    </div>
  );
};

export default Links;
