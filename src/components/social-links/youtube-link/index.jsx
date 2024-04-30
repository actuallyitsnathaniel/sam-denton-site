import youtubeStamp from "../../../assets/images/icons/youtubestamp.png";
export const YoutubeLogo = () => {
  return (
    <a
      className="transition-all duration-100 md:hover:-translate-y-2"
      href="https://www.youtube.com/@samdenton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={youtubeStamp} className="h-16" />
    </a>
  );
};

export default YoutubeLogo;
