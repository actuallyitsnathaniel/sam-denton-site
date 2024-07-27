import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
export const NavItem = ({ setExpanded, title, to }) => {
  let currPage = useLocation().pathname;
  return (
    <Link
      className={clsx([
        "flex transition ease-in-out p-4 px-4 duration-150 hover:scale-110",
        `${
          currPage === to &&
          "underline underline-offset-4 ease-in hidden sm:inline-block"
        }`,
      ])}
      to={to}
      aria-current="location"
      onClick={() => setExpanded(false)}
    >
      {title}
    </Link>
  );
};
