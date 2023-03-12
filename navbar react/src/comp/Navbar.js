import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link className="navlink" to="/">home</Link>
        <br />
        <Link className="navlink" to="/products">Products</Link>
        <br />
        <Link className="navlink" to="/aboutus">about us</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
