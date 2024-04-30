import appleMusicStamp from "../../../assets/images/icons/applemusicstamp.png";

const AppleMusicLink = () => {
  return (
    <a
      className="transition-all duration-100 md:hover:-translate-y-2"
      href="https://music.apple.com/us/artist/sam-denton/797065959"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={appleMusicStamp} className="h-16" alt="apple-music-alt" />
    </a>
  );
};

export default AppleMusicLink;
