import spotifyStamp from "../../../assets/images/icons/spotifystamp.png";

const SpotifyLink = () => {
  return (
    <a
      href="https://open.spotify.com/artist/1f3sxOLibjiBFgRAUg8sMP?si=D-QdTaGwTd2Ftf5cycFlXg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={spotifyStamp}
        className="h-16 transition ease-in-out duration-100 hover:scale-110"
      />
    </a>
  );
};

export default SpotifyLink;
