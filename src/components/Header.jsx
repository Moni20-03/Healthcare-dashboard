import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          ☰
        </button>
        <div className="logo">
          <span className="health">Health</span>
          <span className="care">care.</span>
        </div>
      </div>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." disabled />
        </div>

        <div className="notification-btn">
          <FontAwesomeIcon icon={faBell} />
        </div>

      <div className="header-right">
        <div className="user-avatar">JD</div>
        <button className="add-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </header>
  );
};

export default Header;