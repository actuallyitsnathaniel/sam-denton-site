import { MobileNavHeader } from "./mobile-nav-header";
import { NavItems } from "../nav-items";

export const MobileNav = ({
  expanded,
  setExpanded,
  pageTitle,
  setModalOpen,
}) => {
  return (
    <div id="nav-bar">
      <nav
        className={`font-moslin fixed z-[1] h-30 transition-all bg-opacity-0 ${
          pageTitle.includes("links") && "hidden"
        } ${expanded && "bg-black backdrop-blur-md bg-opacity-80 h-full"}`}
      >
        <MobileNavHeader {...{ expanded, setExpanded, pageTitle }} />
        <div
          id="nav-wrapper"
          className={`w-screen flex justify-center origin-top duration-150 h-0 scale-0 ${
            expanded && "scale-100 h-[80%]"
          }`}
        >
          <NavItems
            classNames={`flex flex-col justify-around items-center ${
              expanded && "text-white"
            }`}
            {...{ setExpanded, pageTitle, setModalOpen }}
          />
        </div>
      </nav>
    </div>
  );
};
