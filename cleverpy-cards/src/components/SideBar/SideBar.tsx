import "./SideBar.css";
import { Link } from "react-router-dom";
import { SideBarMenuCard, SideBarMenuItem } from "../../types";
import { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

interface SideBarMenuProps {
  items: SideBarMenuItem[];
}

export default function SideBar({ items }: SideBarMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSideBarStatus() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars hamburguer">
          <GiHamburgerMenu onClick={handleSideBarStatus} />
        </Link>
        <div className="menu-bars-container">
          {items.map((item) => {
            return (
              <li key={item.id} className="menu-bars menu-bars-navbar">
                <Link to={item.url} className="menu-bars menu-bars-navbar">
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={handleSideBarStatus}>
          <div className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose></AiOutlineClose>
            </Link>
          </div>
          {items.map((item) => {
            return (
              <li key={item.id} className="nav-text">
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

    // <div
    //   className={
    //     isOpen ? "sidebar sidebar-expanded" : "sidebar sidebar-collapsed"
    //   }
    // >
    //   <div className="sidebar sidebar-collapsed__buttons">
    //     <button
    //       className="sidebar sidebar-collapsed__buttons__home"
    //       onClick={handleSideBarStatus}
    //     >
    //       <GiHamburgerMenu></GiHamburgerMenu>
    //     </button>
    //     <SideBarMenuCardView card={card} isOpen={isOpen} />
    //     {items.map((item) => {
    //       return (
    //         <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
