import "./SideBar.css";
import { Link } from "react-router-dom";
import { SideBarMenuItem } from "../../types";
import { Component, useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

interface SideBarMenuProps {
  items: SideBarMenuItem[];
}

// ------------ READ PLEASE --------------

// I was going to just create just a SideBar,but in the end I decided to create
// the top navbar as well and did in this Component, which has navbar and sidebar at the same time.
// If I had to create it again, of course I would create 2 separate components but I have no time :(

export default function SideBar({ items }: SideBarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSideBarStatus() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <Link to="#" className="navbar__item">
          <GiHamburgerMenu onClick={handleSideBarStatus} />
        </Link>
        <div className="navbar__container">
          {items.map((item) => {
            return (
              <li key={item.id} className="navbar__item navbar__link">
                <Link to={item.url} className="navbar__item navbar__link">
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <nav className={isOpen ? "sidebar__menu active" : "sidebar__menu"}>
        <ul className="sidebar__menu--items" onClick={handleSideBarStatus}>
          <Link to="#" className="sidebar__close">
            <AiOutlineClose></AiOutlineClose>
          </Link>

          {items.map((item) => {
            return (
              <li key={item.id} className="sidebar__text">
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
