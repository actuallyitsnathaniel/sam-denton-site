import { Link } from "react-router-dom";
import circle from "../../assets/textures/doodle-stroke-1.png";

const NavItem = ({ to, text, pageTitle, setExpanded }) => {
  return (
    <Link
      className={`transition ease-in-out p-4 duration-150 hover:scale-110 ${
        pageTitle === text &&
        " transition ease-in hidden md:block text-gray-900 md:scale-110"
      }`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {pageTitle === text && (
        <img src={circle} className={"absolute scale-125 -translate-x-4"} />
      )}
      <>{text}</>
    </Link>
  );
};

export default NavItem;
