/*
* Header Component
*/

import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import Logo from "../../assets/images/header-logo.png";
import { ArrowLeft, Bell } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Header({ back }) {
  return(
    <header className="navbar navbar-expand-md navbar-dark bg-primary">
      <nav className="container">
        <Link>
          <ArrowLeft color="white" size={28} />
        </Link>
        <div className="navbar-brand">
          <img src={Logo} alt="" width="100" height="45" />
        </div>
        <Link>
          <Bell color="white" size={20} />
        </Link>
      </nav>
    </header>
  );
}

Header.propTypes = {
  back: PropTypes.bool,
}

Header.defaultProps = {
  back: false,
}

export default Header;
