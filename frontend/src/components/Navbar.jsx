import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaPlusCircle, FaInfoCircle, FaPhone } from "react-icons/fa"; // FontAwesome icons

const Navbar = () => {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
      navbarToggler.click(); // Programmatically trigger the collapse
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark    shadow-sm position-fixed top-0 w-100">
      <div className="container">
        <a className="navbar-brand" href="/">My Blog</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-post" onClick={closeNavbar}>
                <FaPlusCircle /> Add Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                <FaInfoCircle /> About
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
