import React from 'react';
import Login from '../loginForm/LoginForm';

import styles from '../loginView/LoginView.module.css';

const LoginView = () => {
    return (
        <div className={styles.block_wrapper}>
            <div className={styles.bg_image}/>
            <div className={styles.form_wrapper}>
                <Login/>
            </div>
            <div className={styles.orange_border}/>
        </div>
    )
}

export default LoginView;