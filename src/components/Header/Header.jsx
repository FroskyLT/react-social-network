import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className = {h.header}>
      <div className = {h.brandContainer}>
        <div className = {h.brand}>
          <NavLink to = '/'> FL </NavLink> 
          </div>
      </div>
    </div>
  );
}

export default Header;