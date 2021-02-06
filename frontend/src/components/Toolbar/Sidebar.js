import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <nav className="side-drawer">
        <ul>
          <li>
            <a href="/">Course</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
