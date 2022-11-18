import React from "react";
import { Link } from "react-router-dom";
var BrandName = "Subulus Salaam";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse  navbar-fixed-top ">
        <div
          className="navbar-header"
          // style={{ border: "1px solid #4caf50", position: "relative" }}
        >
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
            style={{ color: "white" }}
          >
            <i class="fa-solid fa-bars-staggered"></i>
          </button>
          <div
            className="navbar-brand"
            style={{
              fontSize: "20px",
              color: "white"
            }}
          >
            <Link className="link" to="/">
              {BrandName}
            </Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {/* Keep somethings here */}
        </div>
      </nav>
      <div style={{ paddingBottom: "25px" }}></div>
    </div>
  );
}

export default Navbar;
