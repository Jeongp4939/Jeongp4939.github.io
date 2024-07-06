import React from "react";
import "../styles/navbar.css";

const Navbar = ({ sccurRef1, sccurRef2, sccurRef3, sccurRef4 }) => {
  return (
    <nav className="navbar">
      <div className="logo">PORTPOLIO</div>
      <ul className="navmenu">
        <li onClick={sccurRef1}>소개</li>
        <li onClick={sccurRef2}>프로젝트</li>
        <li onClick={sccurRef3}>기술스택</li>
        <li onClick={sccurRef4}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
