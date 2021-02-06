import React from 'react';
import styles from './DrawerToggleButton.module.css';

const DrawerToggleButton = (props) => {
  return (
    <button className={styles.toggle_button} onClick={props.click}>
      <div className={styles.toggle_button__line} />
      <div className={styles.toggle_button__line} />
      <div className={styles.toggle_button__line} />
    </button>
  );
};

export default DrawerToggleButton;
