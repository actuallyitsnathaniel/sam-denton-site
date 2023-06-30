import PropTypes from 'prop-types'; 

// Icons
import appleMusic from "../../../assets/images/icons/music-platforms/apple-music.svg";
import spotify from "../../../assets/images/icons/music-platforms/spotify.svg";
// import soundcloud from "../../../assets/images/icons/music-platforms/soundcloud.svg"
import tidal from "../../../assets/images/icons/music-platforms/tidal.svg";
import youtube from "../../../assets/images/icons/music-platforms/youtube.svg";

const MusicPlatformLinks = (props) => {

MusicPlatformLinks.propTypes = {
  spotifyLink: PropTypes.string.isRequired,
  appleMusicLink: PropTypes.string.isRequired,
  tidalLink: PropTypes.string.isRequired,
  youtubeLink: PropTypes.string.isRequired,
  soundcloudLink: PropTypes.string.isRequired
}

  return (
    <div
      className={`absolute grid grid-cols-2 
      ${props.className} h-[305px]  ${
        props.width ? props.width : "w-[305px]"
      } justify-items-center items-center -translate-x-1 -translate-y-1 p-4
      `}
    >
      <a
        href={props.spotifyLink}
        className={`${props.spotifyLink === '' && 'hidden'}`} 
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="transition-all duration-75 hover:scale-110"
          height={"75px"}
          alt="spotify-link"
          src={spotify}
        />
      </a>

      <a
        href={props.appleMusicLink}
        className={`${props.appleMusicLink === '' && 'hidden'}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="transition-all duration-75 hover:scale-110"
          height={"75px"}
          alt="apple-music-link"
          src={appleMusic}
        />
      </a>

      <a
        href={props.tidalLink}
        className={`${props.tidalLink === '' && 'hidden'}`} 
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className={"transition-all duration-75 hover:scale-110"}
          height={"75px"}
          alt="tidal-link"
          src={tidal}
        />
      </a>

      <a
        href={props.youtubeLink}
        className={`${props.youtubeLink === '' && 'hidden'}`} 
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="transition-all duration-75 hover:scale-110"
          height={"75px"}
          alt="youtube-link"
          src={youtube}
        />
      </a>
    </div>
  );
};

export default MusicPlatformLinks;
