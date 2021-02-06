import React from 'react';
import './Toolbar.css';
import * as HiIcons from 'react-icons/hi';

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      {/* <div className="toolbar_container"> */}
      <nav className="toolbar__navigation">
        <div className="toggle">
          <HiIcons.HiMenuAlt1
            style={{ fontSize: '40px', color: 'white' }}
            onClick={props.drawerClickHandler}
          />
          {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
        </div>
        <div className="toolbar__logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Course</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Toolbar;
