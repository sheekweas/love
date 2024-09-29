import React from "react";
import "./header.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <h1><span>There’s something</span> I want you to see...</h1>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="song"><FaArrowAltCircleDown className="arrow-down" /></Link>

    </div>
  );
};

export default Header;
