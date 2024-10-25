import React, { useEffect, useRef, useState} from "react";
import home from "../assets/home.svg";
import bookmark from "../assets/bookmark.svg";
import profile from "../assets/profile.png";
import notification from "../assets/notification.svg";
import menu from "../assets/menu.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef=useRef(null);
  const handleMenu = () => {
    setShowMenu(prev=>!prev);
  };
  const navigate=useNavigate()
  const handleNav=()=>{
    navigate('/')
  }
  
  return (
    <div className="navContainer">
      <div className="navBar">
        <img className="menuicon" src={menu} alt="menu" onClick={handleMenu} />
        <section className="navSection">
          <p className="navHeading">Travelmedia.in</p>
          <div className="navButtons">
            <img src={home} onClick={handleNav} className="navBtn" />
            <img src={bookmark} className="navBtn" />
            <img src={notification} className="navBtn" />
            <img src={profile} className="navBtn" />
          </div>
        </section>
      </div>
      {showMenu && (
        <div className="menuContainer" ref={menuRef}>
          <h3 className="menuHeading">Travelmedia.in</h3>
          <div className="menu">
            <p className={`menuBtn`} onClick={handleNav}>Home</p>
            <p className="menuBtn">Notification</p>
            <p className="menuBtn">Bookmark</p>
            <p className="menuBtn">Profile</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
