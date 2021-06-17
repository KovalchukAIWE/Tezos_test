import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../header/Header.module.css'

const Header = () => {

    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");

    // hamburger.addEventListener("click", mobileMenu);

    // function mobileMenu() {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // }

    return (
        <div className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logo_wraper}>
                    <div className={styles.logo}></div>
                    <p>Tezos4all</p>
                </div>            
                <ul className={styles.navigation_items}>
                    <Link to='/' className={styles.items}>Home</Link>
                    <Link to='/login' className={styles.items}>Login</Link>
                </ul>
                {/* <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div> */}
            </nav>
        </div>
    )
}

export default Header;