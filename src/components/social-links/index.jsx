import InstagramLogo from "./instagram-link";
import GmailLogo from "./gmail-link";
import SpotifyLink from "./spotify-link";
import AppleMusic from "./apple-music-link";

export const SocialLinks = () => {
  return (
    <div
      className={`md:fixed flex flex-row md:flex-col md:gap-1 z-[1] ${
        document.URL.includes("links") ? "hidden" : ""
      }`}
    >
      <SpotifyLink />
      <AppleMusic />
      <InstagramLogo />
      <GmailLogo />
    </div>
  );
};
