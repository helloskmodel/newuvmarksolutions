import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p>
          Houston · New York · Vancouver
        </p>

        <div className="footer-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-of-use">
            Terms of Use
          </Link>

        </div>

        <p className="footer-copy">
          © 2026 UVMARK Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
