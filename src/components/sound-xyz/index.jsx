import React, { useState, useRef } from "react";
import { PropTypes } from "prop-types";

const Item = ({ soundURL, id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-black rounded-lg w-72 h-48" />
      <iframe
        ref={iframeRef}
        src={soundURL}
        onLoad={() => setIsLoaded(true)}
        id={id}
        className={`rounded-lg w-72 h-48 ${
          !isLoaded && "bg-[url('/src/assets/images/icons/loading.svg')]"
        } bg-no-repeat bg-center relative`}
        allow="clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

const SoundXYZGallery = ({ children }) => {
  return (
    <div id="sound-xyz-releases " className="p-5 my-14 md:px-24">
      <h1 className="p-5">digital collectibles</h1>
      <div
        className="flex flex-wrap justify-center mx-auto w-fit 
               p-5 content-between gap-10"
      >
        {React.Children.map(children, (child, i) => {
          console.log(child);
          return React.cloneElement(child, { i });
        })}
      </div>
    </div>
  );
};

Item.propTypes = {
  soundURL: PropTypes.string,
  id: PropTypes.string,
};

SoundXYZGallery.propTypes = {
  children: PropTypes.array,
};

SoundXYZGallery.Item = Item;

export default SoundXYZGallery;
