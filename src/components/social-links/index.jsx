import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";
// import YoutubeLogo from "./youtube-link";

import { useLocation } from "react-router-dom";

export const SocialLinks = () => {
  let location = useLocation();
  const isHidden =
    (location.pathname.includes("links") ||
      location.pathname.includes("about")) &&
    "hidden";

  return (
    <div className={`${isHidden}`}>
      <div
        className={`fixed top-0 gap-4 z-[1] ${
          document.URL.includes("links") ? "hidden" : ""
        }`}
      >
        <SpotifyLink />
        <AppleMusic />
        {/* <YoutubeLogo /> */}
        <InstagramLogo />
        <GmailLogo />
      </div>
    </div>
  );
};
