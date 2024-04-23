import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import HamburgerIcon from "../../assets/images/icons/navbar/hamburger-icon.svg";
import CloseIcon from "../../assets/images/icons/navbar/close-icon.svg";
import NavItem from "./nav-item";

// https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react

const usePageTitle = (location) => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const titleMap = [
      { path: "/", title: "home" },
      { path: "/home", title: "home" },
      { path: "/home/", title: "home" },
      { path: "/about", title: "about" },
      { path: "/contact", title: "contact" },
      { path: "/music", title: "music" },
      { path: "/merch", title: "merch" },
      { path: "/shows", title: "shows" },
      { path: "/secret", title: "secret" },
      { path: "/links", title: "links" },
    ];

    const curTitle = titleMap.find((item) => item.path === location);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = "sam denton - " + curTitle.title;
    }
  }, [location]);

  return pageTitle;
};

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  let pageTitle = usePageTitle(useLocation().pathname);

  return (
    <nav
      className={`text-black p-2.5 font-semibold ${
        pageTitle.includes("links") ? "hidden" : ""
      }`}
    >
      <div className="flex justify-between">
        <a
          id="home-icon"
          href="/home"
          className={`md:hidden ${
            pageTitle.includes("home") && "pointer-events-none opacity-0"
          } p-3.5 text-6xl -translate-y-1 align-middle`}
        >
          ⌂
        </a>
        <div className="md:hidden p-5 justify-center text-5xl whitespace-nowrap">
          {pageTitle}
        </div>
        <button
          data-collapse-toggle="navbar"
          id="navbar-icon"
          type="button"
          className={`md:hidden p-3 justify-end`}
          aria-controls="navbar"
          aria-expanded="false"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <img src={CloseIcon} /> : <img src={HamburgerIcon} />}
        </button>
      </div>
      <div
        id="nav-wrapper"
        className={`transition-all h-0 origin-top duration-100 md:block
      ${expanded ? "scale-100 h-full" : "scale-0"} md:scale-100 
      `}
      >
        <ul
          id="nav-bar"
          className={`transition-all duration-100 ease-in-out flex flex-col md:flex-row items-center justify-between md:mx-14 my-3 text-3xl whitespace-nowrap`}
        >
          <NavItem to={"/home"} text={"home"} {...{ pageTitle, setExpanded }} />
          <NavItem
            to={"/music"}
            text={"music"}
            {...{ pageTitle, setExpanded }}
          />
          <NavItem
            to={"/about"}
            text={"about"}
            {...{ pageTitle, setExpanded }}
          />
          {/**  <Link
            className={`nav-item ${
              pageTitle === "merch" ? "nav-item-active" : ""
            }`}
            to="/merch"
            onClick={() => setExpanded(false)}
          >
            merch
          </Link> */}
          {/** <Link
            className={`nav-item ${
              pageTitle === "links" ? "nav-item-active" : ""
            }`}
            to="/links"
            onClick={() => setExpanded(false)}
          >
            contact & links
          </Link> */}
          <Link
            className={`hidden nav-item ${
              pageTitle === "shows" ? "nav-item-active" : ""
            }`}
            to="/shows"
            onClick={() => setExpanded(false)}
          >
            shows
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
