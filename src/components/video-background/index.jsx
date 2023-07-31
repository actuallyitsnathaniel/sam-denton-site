import BGVideoMP4 from "../../assets/videos/bty-30sec.mp4";
import BGVideoWEBM from "../../assets/videos/bty-30sec.webm";

const VideoBackground = () => {
  return (
    <video
      height={"110%"}
      width={"auto"}
      id="video"
      rel="preload"
      autoPlay
      loop
      muted
      poster
      playsInline
      disablePictureInPicture
      className="video"
    >
      <source src={BGVideoMP4} type="video/mp4" />
      <source src={BGVideoWEBM} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
