import { useEffect, useState } from "react";
import { HiOutlineCode, HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import { Navbar } from "../Navbar";

import "./styles.scss";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenu = () => {
    const nav = document.querySelector("nav");
    const body = document.querySelector("body");

    if (window.innerWidth < 768) {
      if (isShowMenu) {
        nav.classList.remove("show-menu");
        body.style.overflow = "initial";
        setIsShowMenu(false);
      } else {
        nav.classList.add("show-menu");
        body.style.overflow = "hidden";
        setIsShowMenu(true);
      }
    }
  };

  return (
    <header>
      <div className="wrapper content">
        <Link to="/" className="logo">
          <HiOutlineCode /> Portfólio
        </Link>

        <Navbar handleMenu={handleMenu} />

        <button type="button" id="toggle-menu" onClick={handleMenu}>
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </header>
  );
};
