import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './Toolbar.css';

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      {/* <div className="toolbar_container"> */}
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
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
