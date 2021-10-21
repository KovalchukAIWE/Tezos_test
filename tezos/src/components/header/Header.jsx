import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.logo_wrapper}>
          <div className={styles.logo} />
          <p>Tezos4all</p>
        </div>
        <ul className={styles.navigation_items}>
          <Link to="/" className={styles.items}>
            Home
          </Link>
          <Link to="/login" className={styles.items}>
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
