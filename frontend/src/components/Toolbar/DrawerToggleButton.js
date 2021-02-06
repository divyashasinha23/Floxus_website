import React from 'react';
import styles from './DrawerToggleButton.module.css';
import * as HiIcons from 'react-icons/hi';

const DrawerToggleButton = (props) => {
  return (
    <button className={styles.toggle_button} onClick={props.click}>
      <HiIcons.HiMenuAlt1 style={{ fontSize: '40px', color: 'white' }} />
    </button>
  );
};

export default DrawerToggleButton;
