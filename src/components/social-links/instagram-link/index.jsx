import InstagramSVG from "../../../assets/images/icons/instagram-logo.svg";

const InstagramLogo = () => {
  return (
    <a
      className="transition-all duration-100 p-2 md:hover:-translate-y-0 translate-y-3"
      href="https://instagram.com/samdenton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={InstagramSVG}
        className="transition-all duration-75 h-14 hover:scale-110"
      />
    </a>
  );
};

export default InstagramLogo;
