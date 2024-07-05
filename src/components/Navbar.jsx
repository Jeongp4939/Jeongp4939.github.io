import React from "react";
import "../styles/navbar.css";

const Navbar = ({ sccurRef1, sccurRef2, sccurRef3, sccurRef4 }) => {
  return (
    <nav className="navbar">
      <img className="logo" src="#" alt="logo" />
      <ul className="navmenu">
        <li>
          <a onClick={sccurRef1}>소개</a>
        </li>
        <li>
          <a onClick={sccurRef2}>프로젝트</a>
        </li>
        <li>
          <a onClick={sccurRef3}>기술스택</a>
        </li>
        <li>
          <a onClick={sccurRef4}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
