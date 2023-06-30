import React from "react";
import Disc from "./disc";

// TODO: add discography

// Albums


// EPs


// Singles


const Discography = () => {
  return (
    <div>
      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          singles/EPs
        </h2>
        <div className="flex flex-wrap w-full justify-center">
          <Disc 
            artwork={null}
            title={''}
            spotifyLink=''
            appleMusicLink=''
            soundcloudLink=''
            youtubeLink=''
          />
          
        </div>
      </div>

      <div>
        <h2 className="flex text-6xl font-semibold italic justify-center p-10">
          albums
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center">  
          <Disc 
            artwork={null} 
            title={''}
            spotifyLink=''
            appleMusicLink=''
            soundcloudLink=''
            youtubeLink=''
          />
        </div>
      </div>
    </div>
  );
}

Discography.Disc = Disc;

export default Discography;
