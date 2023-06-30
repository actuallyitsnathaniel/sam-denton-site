import React from "react";
import Discography from "../../components/discography";

// albums
import forNow from "../../assets/images/discography/LPs/for_now_600x600bb.jpeg";

// singles
import backToYou from "../../assets/images/discography/Singles_EPs/back_to_you_600x600bb.jpeg";
import idkya from "../../assets/images/discography/Singles_EPs/idkya_600x600bb.jpeg";
import _209 from '../../assets/images/discography/Singles_EPs/2_09_600x600bb.jpeg';

const Music = () => {
  // TODO: work with sam to get music uploaded to youtube
  return (
    <div className="flex flex-wrap mt-16 justify-center text-white">
      <Discography>
        {/** Albums */}

        <Discography.Disc
          recordType={"album"}
          artwork={forNow}
          title={"for now,"}
          spotifyLink={
            "https://open.spotify.com/album/41VQPdMsvw0bLKRAiQ0dsL?si=j5K5fDzhSACNNMooWrQAOQ"
          }
          appleMusicLink={"https://music.apple.com/ph/album/for-now/1476295406"}
          tidalLink={"https://tidal.com/browse/album/245469084"}
          soundcloudLink={""}
          youtubeLink={""}
        />

        {/** Singles / EPs */}

        <Discography.Disc
          recordType={"single"}
          artwork={backToYou}
          title={"back to you"}
          spotifyLink={
            "https://open.spotify.com/track/7rTbCF7hmnxpiJwQWGiyK5?si=77e1816ad74d4f30"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/back-to-you-single/1437900119"
          }
          tidalLink={"https://tidal.com/browse/track/242202178"}
          soundcloudLink={"https://on.soundcloud.com/XoZGT"}
          youtubeLink={"https://www.youtube.com/watch?v=5Cqq5n7153A"}
        />
        <Discography.Disc
          recordType="single"
          artwork={idkya}
          title={"idkya"}
          spotifyLink={
            "https://open.spotify.com/track/7L8IiYRiALjOpeaAuCIbdq?si=dbac34fcc4e8436c"
          }
          appleMusicLink={
            "https://music.apple.com/us/album/idkya/1442630949?i=1442631257"
          }
          tidalLink={"https://tidal.com/browse/track/243348992"}
          soundcloudLink={"https://on.soundcloud.com/1eR4x"}
          youtubeLink={"https://www.youtube.com/watch?v=bUUB3sBHwyA"}
        />
        <Discography.Disc
          recordType='single'
          artwork={_209}
          title='2:09'
          spotifyLink='https://open.spotify.com/track/0dhX55OSXJdHfqeNxt4jNg?si=723c5458a64b484d'
          appleMusicLink='https://music.apple.com/us/album/2-09/1451819059?i=1451819133'
          tidalLink={"https://tidal.com/browse/track/246154538"}
          soundcloudLink={"https://on.soundcloud.com/b5Cqj"}
          youtubeLink='https://www.youtube.com/watch?v=LWqM12QvhXw'
        />
      </Discography>
    </div>
  );
};

export default Music;
