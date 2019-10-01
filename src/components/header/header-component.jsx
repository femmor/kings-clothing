import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import { auth } from "../../firebase/firebase.utils";

// Styles
import "./header.styles.scss";

// Logo
import Logo from "../../assets/logo.png";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
