import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/uvmark-logo.png" alt="UVMARK" />
      </div>

      <nav>
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/products">PRODUCT AND SERVICE</a>
        <a href="/case-studies">CASE STUDIES</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}
