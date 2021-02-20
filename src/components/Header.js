import React, { useState, useEffect } from "react";
import Link from "./Link";

const menuOptions = [
  {
    href: "/",
    label: "Accordion",
  },
  {
    href: "/search",
    label: "Search",
  },
  {
    href: "/dropdown",
    label: "Dropdown",
  },
  {
    href: "/translate",
    label: "Translate",
  },
  {
    href: "/spotify",
    label: "Spotify",
  },
  {
    href: "/parallax",
    label: "Parallax",
  },
];
const Header = () => {
  const [currentHref, setCurrentHref] = useState(window.location.pathname);

  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    const getActiveIndex = () => {
      let activeIndex = null;
      menuOptions.forEach((menu, index) =>
        menu.href === currentHref ? (activeIndex = index) : null
      );

      return activeIndex;
    };

    setActiveMenu(getActiveIndex());
  }, [currentHref]);

  const renderedMenu = menuOptions.map((menuItem, index) => {
    return (
      <Link
        key={index}
        href={menuItem.href}
        className={`item ${activeMenu === index && "active"}`}
        setCurrentHref={setCurrentHref}
      >
        {menuItem.label}
      </Link>
    );
  });

  return <div className="ui pointing menu">{renderedMenu}</div>;
};

export default Header;
