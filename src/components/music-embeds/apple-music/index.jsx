const AppleMusicEmbed = () => {
  return (
    <iframe
      allow="autoplay; encrypted-media;"
      height="470"
      title="apple-music-embed"
      style={{ overflow: "hidden", borderRadius: "26px", padding:"1vh", background: "transparent" }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/us/album/for-now/1476295406"
    ></iframe>
  );
};

export default AppleMusicEmbed;