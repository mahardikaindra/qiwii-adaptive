/*
 * Header Component
 */

import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Logo from "../../assets/images/header-logo.png";
import { ArrowLeft, Bell } from "react-bootstrap-icons";

function Header({ back }) {

  const renderBack = () => {
    return (
      <div>
        <ArrowLeft color="white" size={24} />
      </div>
    );
  }

  return (
    <header className="navbar navbar-expand-md navbar-dark bg-primary">
      <nav className="container">
        {back ? renderBack() : <div className="px-2"/>}
        <div className="navbar-brand">
          <img src={Logo} alt="" width="100" height="45" />
        </div>
        <div>
          <Bell color="white" size={20} />
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  back: PropTypes.bool,
};

Header.defaultProps = {
  back: false,
};

export default Header;
