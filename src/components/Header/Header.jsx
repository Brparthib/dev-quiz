import React from "react";
import logo from "../../images/choose.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="" />
          <p>Dev-Quiz</p>
        </Link>
      </div>
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Topics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="statistics" className="nav-link" href="#">
              Statistics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="blog" className="nav-link" href="#">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
