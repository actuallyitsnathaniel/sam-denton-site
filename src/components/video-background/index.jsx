import BGVideo from "../../assets/videos/music-madness.mp4";

const VideoBackground = () => {
  return (
      <video
        src={BGVideo}
        height={"110%"}
        width={"auto"}
        id="video"
        rel="preload"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        className="video"
      />
  );
};

export default VideoBackground;
