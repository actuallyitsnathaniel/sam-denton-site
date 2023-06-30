import { useState } from "react";
import PropTypes from 'prop-types'; 

import MusicPlatformLinks from "./platform-links";


const Disc = (props) => {
  const [expanded, setExpanded] = useState(-1);

  const setActiveDisc = (i) => {
    if (i === expanded) {
      setExpanded(-1);
    } else {
      setExpanded(i);
    }
  };

  Disc.propTypes = {
    recordType: PropTypes.string.isRequired,
    artwork: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }

  return (
    <div
      onClick={() => {
        setActiveDisc(props.i);
      }}
      className="transition-scale duration-100 text-8xl p-6 hover:scale-110 group"
    >
      <div className={"h-[300px] w-[300px]"}>
        <MusicPlatformLinks
          className={`transition-all origin-content bg-black overflow-visible
          ${
            expanded === props.i
              ? "bg-opacity-50 backdrop-blur-md opacity-100 visible"
              : "invisible opacity-0 bg-opacity-0 backdrop-blur-none"
          }`}
          appleMusicLink={props.appleMusicLink}
          spotifyLink={props.spotifyLink}
          soundcloudLink={props.soundcloudLink}
          youtubeLink={props.youtubeLink}
        />
        <img height={"300px"} width={"300px"} src={props.artwork} alt={props.title} />
      </div>
      <div className="flex flex-row w-[300px] flex-wrap text-center justify-center font-extrabold transition-scale duration-100 origin-top text-xl pt-2 scale-0 group-hover:scale-90">
        {props.recordType === 'album' && `${props.title}`}
        {!(props.recordType === 'album') && `${props.title + ' - ' + props.recordType}`}
      </div>
    </div>
  );
}

export default Disc;
