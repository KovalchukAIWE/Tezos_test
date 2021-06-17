import React from 'react';
import styles from './GeneralDescription.module.css';

const GeneralDescription = () => {
    return (
        <div id='description' className={styles.wrapper}>
            <div className={styles.left_block}>
                <p className={styles.block_header}>General Description of the assignment</p>
                <div className={styles.block_text}>
                    <div className={styles.block_number}>01</div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <hr className={styles.underline}/>
                <div className={styles.block_text}>
                    <div className={styles.block_number}>02</div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <hr className={styles.underline}/>
                <div className={styles.block_text}>
                    <div className={styles.block_number}>03</div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <hr className={styles.underline}/>
            </div>
            <div className={styles.right_block}></div>
        </div>
    )
};

export default GeneralDescription;