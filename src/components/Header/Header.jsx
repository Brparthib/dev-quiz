import React, { useState } from "react";
import logo from "../../images/choose.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
          <p>Dev-Quiz</p>
        </Link>
      </div>

      <div>
        {open ? (
          <XMarkIcon onClick={() => setOpen(!open)} className="menuIcon" />
        ) : (
          <Bars3Icon onClick={() => setOpen(!open)} className="menuIcon" />
        )}
      </div>

      <nav className={`nav-bar ${open ? "navShow" : "navClose"}`}>
          <Link to="/" className="nav-link">
            Topics
          </Link>
          <Link to="statistics" className="nav-link">
            Statistics
          </Link>
          <Link to="blog" className="nav-link">
            Blog
          </Link>
      </nav>
    </div>
  );
};

export default Header;
