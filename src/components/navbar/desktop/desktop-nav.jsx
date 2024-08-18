import { NavItems } from "../nav-items";
// import { SocialLinks } from "../../social-links";

import samDentonTitle from "../../../assets/images/graphics/samdentonbloblogo.png";
import SDLogo from "../../../assets/images/graphics/sdlogo.png";
import label432 from "../../../assets/images/graphics/432.png";

export const DesktopNav = ({
  pageTitle,
  expanded,
  setExpanded,
  setModalOpen,
}) => {
  return (
    <>
      {/* <SocialLinks /> */}
      <nav
        className={`font-moslin fixed flex flex-col top-0 z-[1] text-black
        transition-all duration-100 ease-in-out ${
          pageTitle.includes("links") && "hidden"
        }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="outline outline-black w-min p-2 bg-clip-border rounded-2xl m-5 outline-[2.5px] transition duration-100 hover:scale-110"
        >
          Menu
        </button>
        <NavItems
          classNames={`flex-col w-min duration-150 h-0 scale-0 ${
            expanded && "scale-100"
          }`}
          {...{ pageTitle, setExpanded, setModalOpen }}
        />
      </nav>
      <img
        src={samDentonTitle}
        className={`fixed top-0 right-0 p-5 max-h-24 object-contain ${
          !pageTitle.includes("home") && "hidden"
        }`}
      />
      <img
        src={SDLogo}
        className="fixed bottom-0 left-0 p-5 max-h-28 object-contain"
      />
      <img
        src={label432}
        className="fixed bottom-0 right-0 p-5 max-h-28 object-contain"
      />
    </>
  );
};
