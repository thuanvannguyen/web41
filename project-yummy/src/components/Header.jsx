import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">Yummy</h1>
          <span>.</span>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="#hero" className="active">
                Home
                <br />
              </Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#menu">Menu</Link>
            </li>
            <li>
              <Link to="#events">Events</Link>
            </li>
            <li>
              <Link to="#chefs">Chefs</Link>
            </li>
            <li>
              <Link to="#gallery">Gallery</Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li>
                  <Link to="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link to="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link to="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <Link className="btn-getstarted" to="/login">
          Book a Table
        </Link>
      </div>
    </header>
  );
};

export default Header;
