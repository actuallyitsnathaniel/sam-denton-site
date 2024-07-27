import appleMusicStamp from "../../../assets/images/icons/applemusicstamp.png";

const AppleMusicLink = () => {
  return (
    <a
      href="https://music.apple.com/us/artist/sam-denton/797065959"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={appleMusicStamp}
        className="h-16 transition ease-in-out duration-100 hover:scale-110"
        alt="apple-music-alt"
      />
    </a>
  );
};

export default AppleMusicLink;
