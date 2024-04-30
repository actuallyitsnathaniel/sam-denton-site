import spotifyStamp from "../../../assets/images/icons/spotifystamp.png";

const SpotifyLink = () => {
  return (
    <a
      className="transition-all duration-100 md:hover:-translate-y-2"
      href="https://open.spotify.com/artist/1f3sxOLibjiBFgRAUg8sMP?si=D-QdTaGwTd2Ftf5cycFlXg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={spotifyStamp} className="h-16" />
    </a>
  );
};

export default SpotifyLink;
