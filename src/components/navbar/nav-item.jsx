import { Link } from "react-router-dom";
const NavItem = ({ to, text, pageTitle, setExpanded }) => {
  return (
    <Link
      className={`transition ease-in-out p-4 duration-150 hover:scale-110 hover:text-gray-600 ${
        pageTitle === text &&
        " transition ease-in hidden md:block text-gray-900 md:scale-110"
      }`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {text}
    </Link>
  );
};

export default NavItem;
