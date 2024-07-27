import { NavItems } from "../nav-items";

export const DesktopNav = ({ pageTitle, setExpanded, setModalOpen }) => {
  return (
    <nav
      className={`fixed flex flex-col bottom-0 z-[1] text-black
        transition-all duration-100 ease-in-out ${
          pageTitle.includes("links") && "hidden"
        }`}
    >
      <NavItems
        classNames={"flex-col w-min"}
        {...{ pageTitle, setExpanded, setModalOpen }}
      />
    </nav>
  );
};
