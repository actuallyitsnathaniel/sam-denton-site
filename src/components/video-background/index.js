import BGVideo from "../../assets/videos/music-madness.mp4";

const VideoBackground = () => {
  return (
    <div className="video-wrapper">
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
    </div>
  );
};

export default VideoBackground;
