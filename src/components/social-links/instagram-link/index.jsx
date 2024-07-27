import instagramStamp from "../../../assets/images/icons/igstamp.png";

const InstagramLogo = () => {
  return (
    <a
      href="https://instagram.com/samdenton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={instagramStamp}
        className="h-16 transition ease-in-out duration-100 hover:scale-110"
      />
    </a>
  );
};

export default InstagramLogo;
