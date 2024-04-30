import React from "react";

// import { MusicLinks } from "../../components/music-embeds";
import samDentonLogo from "../../assets/images/samdentonstamplogo.png";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="flex justify-center items-center">
        <img src={samDentonLogo} className="max-h-72 self-center" />
      </h1>
    </div>
  );
};

export default Home;
