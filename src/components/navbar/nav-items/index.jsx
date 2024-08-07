import { NavItem } from "./nav-item";

export const NavItems = ({
  classNames,
  setExpanded,
  pageTitle,
  setModalOpen,
}) => {
  return (
    <ul
      id="nav-bar"
      className={`flex text-3xl sm:justify-around ${
        !!classNames && classNames
      }`}
    >
      <NavItem title="home" to="/home" {...{ pageTitle, setExpanded }} />
      <NavItem title="music" to="/music" {...{ pageTitle, setExpanded }} />
      <NavItem title="about" to="/about" {...{ pageTitle, setExpanded }} />
      <button
        className={`flex transition ease-in-out p-4 px-4 duration-150
            hover:scale-110 cursor-pointer`}
        onClick={() =>
          // setModalOpen(true);
          alert("TODO: newsletter")
        }
      >
        contact
      </button>
    </ul>
  );
};
