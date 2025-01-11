import * as React from 'react';
import logo from '../../resources/logo.svg';

import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header-container'>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
};

export default Header;
