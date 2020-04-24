import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.scss';

const NavBar = ({ numberOfActive }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__icon">
        <FaShoppingCart />
      </div>
      <div className="nav-bar__sum">{numberOfActive}</div>
      <p className="nav-bar__paragraph">Item</p>
    </div>
  );
};
export default NavBar;
