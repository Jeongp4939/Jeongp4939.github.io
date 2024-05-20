import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navmenu">
        <li><a href="#">소개</a></li>
        <li><a href="#">프로젝트</a></li>
        <li><a href="#">기술스택</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
