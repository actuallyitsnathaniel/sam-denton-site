import instagramStamp from "../../../assets/images/icons/igstamp.png";

const InstagramLogo = () => {
  return (
    <a
      className="transition-all duration-100 md:hover:-translate-y-2"
      href="https://instagram.com/samdenton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramStamp} className="h-16" />
    </a>
  );
};

export default InstagramLogo;
