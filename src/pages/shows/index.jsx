import React from "react";
import pageTransition from "../../utils/pageTransition";

import ShowLink from "../../components/show-link";
import breaking_sound from "../../assets/images/thumbnails/breaking-sound.png";

const Shows = () => {
  return (
    <main className="flex flex-col min-h-full md:mt-16 text-center p-3 text-black justify-center text-3xl">
      {/* It's quiet... too quiet... */}
      <div className="md:p-3">
        <ShowLink
          link="https://www.tixr.com/groups/breakingsoundla/events/breaking-sound-la-at-adults-only-09-04-112822"
          artists="john white | sam denton | ryland"
          date="sep 4th, 2024"
          venue="adults only, los angeles, ca"
          thumbnail={breaking_sound}
          alt="adults-only-sep-4th"
        />
      </div>
    </main>
  );
};

export default pageTransition(Shows);
