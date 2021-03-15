import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from './Logo/robinhood.svg';
import './Header.css';

function Header() {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} alt="logo" width={25} />
      </div>
      {/* search bar */}
      <div className="header__search">
        <div className="header__searchContainer">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {/* menu items */}
      <div className="header__menuItems">
        <Router>
          <Link to="/freestocks" className='header__links'><span>Free Stocks</span></Link>
          <Link to="/portfolio" className='header__links'><span>Portfolio</span></Link>
          <Link to="/cash" className='header__links'><span>Cash</span></Link>
          <Link to="/messages" className='header__links'><span>Messages</span></Link>
          <Link to="/account" className='header__links'><span>Account</span></Link>
        </Router>

      </div>
    </div>
  );
}

export default Header;
