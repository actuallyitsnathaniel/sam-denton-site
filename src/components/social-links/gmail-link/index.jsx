import gmailStamp from "../../../assets/images/icons/gmailstamp.png";

const GmailLogo = () => {
  return (
    <a
      href="mailto:samdentonmusic@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={gmailStamp}
        className="h-16 transition ease-in-out duration-100 hover:scale-110"
      />
    </a>
  );
};

export default GmailLogo;
