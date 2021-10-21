import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
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
      <div className={styles.footer_items}>
        <ul className={styles.first_block}>
          <li className={styles.list}>
            <a href="#skills" className={styles.list_items}>
              Testing skills
            </a>
          </li>
          <li className={styles.list}>
            <a href="#description" className={styles.list_items}>
              General description of the assignment
            </a>
          </li>
          <li className={styles.list}>
            <a href="#team" className={styles.list_items}>
              Our team
            </a>
          </li>
        </ul>
        <ul className={styles.second_block}>
          <li className={styles.list_items}>About us</li>
          <li className={styles.list_items}>Carrier</li>
          <li className={styles.list_items}>Blog</li>
        </ul>
      </div>
      <div className={styles.footer_copyright}>&copy;Copyright</div>
    </div>
  );
};

export default Footer;
