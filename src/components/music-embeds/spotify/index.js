const SpotifyEmbed = () => {
  return (
    <iframe
      height="470px"
      title="spotify-embedded"
      loading="lazy"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://open.spotify.com/embed/artist/1f3sxOLibjiBFgRAUg8sMP?utm_source=generator"
      }
      allow={
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      }
    />
  );
}

export default SpotifyEmbed;