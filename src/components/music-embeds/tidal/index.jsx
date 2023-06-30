const TidalEmbed = () => {
  return (
    <iframe
      height="470px"
      title="tidal-embed"
      style={{
        borderRadius: "26px",
        padding: "1vh",
      }}
      src={
        "https://embed.tidal.com/albums/245469084?layout=gridify"
      }
      loading="lazy"
    />
  );
};

export default TidalEmbed;
