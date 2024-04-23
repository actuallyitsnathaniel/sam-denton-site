import AppleMusicSVG from "../../../assets/images/icons/music-platforms/apple-music.svg";

const AppleMusicLink = () => {
  return (
    <a
      className="transition-all duration-100 p-2 md:hover:-translate-y-0 translate-y-3"
      href="https://music.apple.com/us/artist/sam-denton/797065959"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={AppleMusicSVG}
        className="transition-all duration-75 my-auto rounded-[9px] hover:scale-110 hover:bg-gradient-to-b from-[#fa57c1] via-[#b166cc] to-[#69a6f9]"
        alt="apple-music-alt"
      />
    </a>
  );
};

export default AppleMusicLink;
