import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header.styles.scss";

// Logo
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img
          src={Logo}
          alt=""
          style={{
            width: 63,
            height: 70
          }}
        />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
