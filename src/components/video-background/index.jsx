import BGVideo from "../../assets/videos/bty-30sec.mp4";

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
