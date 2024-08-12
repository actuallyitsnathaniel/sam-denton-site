import paperBG from "../../assets/textures/paper-1.png";
import samBG from "../../assets/images/graphics/sam-color.jpg";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

export const ImageBackground = () => {
  const location = useLocation().pathname;
  return (
    <div>
      <img
        className={clsx(
          "fixed flex min-w-full w-fit h-full",
          "z-[-1] bg-orange-100 saturate-[.65] bg-blend-soft-light",
          "object-cover scale-100 overflow-clip",
          `${!location.includes("home") && "blur-sm"}`
        )}
        height={"100%"}
        width={"auto"}
        id="image-bg"
        loading="eager"
        src={samBG}
      />
      <img
        className={clsx(
          "fixed flex min-w-full w-fit h-full",
          "z-[-1] bg-orange-100 saturate-[.25] brightness-75 mix-blend-overlay",
          "object-cover scale-100 overflow-clip"
        )}
        height={"100%"}
        width={"auto"}
        id="image-bg"
        loading="eager"
        src={paperBG}
      />
    </div>
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
