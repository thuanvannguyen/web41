import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <span style={{ padding: "0 10px" }}>|</span>
      <Link to="/listing">Listing</Link>
    </>
  );
};

export default Header;
