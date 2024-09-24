import React from "react";
import "../assets/css/navbar.css";
import shoppingBag from "../assets/images/shopping-Bag.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <span className="logo-highlight">Finest</span>
          <span className="logo-regular">Mart</span>
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#sales">Sales</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
