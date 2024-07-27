import paperBG from "../../assets/textures/paper-1.png";
import clsx from "clsx";

export const ImageBackground = () => {
  return (
    <img
      className={clsx(
        "fixed flex min-w-full w-full h-full",
        "z-[-1] bg-orange-100 saturate-[.75] bg-blend-soft-light",
        "object-cover scale-110 overflow-clip"
      )}
      height={"110%"}
      width={"auto"}
      id="image-bg"
      loading="eager"
      src={paperBG}
    />
  );
};

const VideoBackground = () => {
  return (
    <video
      height={"auto"}
      width={"100%"}
      id="video"
      autoPlay
      loop
      muted
      playsInline
      disablePictureInPicture
      className={`fixed transition-all duration-200 w-full h-full object-cover`}
    >
      <source src={BGVideoMP4} type="video/mp4" />
      <source src={BGVideoWEBM} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
