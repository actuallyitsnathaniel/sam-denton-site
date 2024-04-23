import React from "react";
import profile1 from "../../assets/images/profiles/profile-1.jpg";

const About = () => {
  return (
    <div className="md:flex md:flex-wrap -mt-10 md:mt-0 md:py-14 px-5 justify-between text-2xl text-black">
      <div className="md:flex md:flex-wrap pt-8">
        <div className="flex flex-wrap md:justify-between">
          <div className="lg:px-5 pb-10 lg:pb-0 text-justify lg:w-1/2 md:text-3xl first-line:italic">
            <span className="font-extrabold text-4xl md:text-6xl">S</span>am{" "}
            <span className="font-extrabold text-4xl md:text-6xl">D</span>enton{" "}
            is an indie Pop-n-B artist from Northern California. Driven by a
            passion for empathy and inclusivity, Sam combines soulful melodies
            with authentic lyrics in hopes to bring people in on a collective
            experience. With influences spanning genres and genuine realness,
            there’s something for everyone to connect to. Sam has amassed over
            400k streams on Spotify with his current collection of singles and
            EP, "for now," and has much more scheduled for release later this
            year.
          </div>
          <div
            id="carousel"
            className="flex rounded-xl overflow-scroll h-fit mx-auto lg:w-[45%]"
          >
            <img className="object-cover" src={profile1} alt="profile-img-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
