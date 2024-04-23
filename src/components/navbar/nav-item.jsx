import { Link } from "react-router-dom";
const NavItem = ({ to, text, pageTitle, setExpanded }) => {
  return (
    <Link
      className={`nav-item ${pageTitle === text ? "nav-item-active" : ""}`}
      to={to}
      aria-current="page"
      onClick={() => setExpanded(false)}
    >
      {text}
    </Link>
  );
};

export default NavItem;
