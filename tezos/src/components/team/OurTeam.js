import React from 'react';
import styles from './OurTeam.module.css';

const OurTeam = () => {
    return (
        <>
            <div id='team' className={styles.block_header}>Our team</div>
            <div className={styles.wrapper}>
                <div className={styles.left_block}>
                    <div className={styles.left_img}></div>
                    <p className={styles.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Augue molestie pretium, dictum nunc ac pellentesque. 
                        Semper imperdiet elit, nec faucibus varius dui. Lorem non 
                        sed tincidunt pharetra tempor. Amet proin sapien consequat orci,
                        mauris.Lorem ipsu elit.\amet, porttitor.</p>
                    <div className={styles.btn_wrapper}>
                        <button className={styles.btn}>Learn More...</button>
                    </div>                    
                </div>
                <div className={styles.right_block}>
                    <div className={styles.right_img}></div>
                    <p className={styles.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Augue molestie pretium, dictum nunc ac pellentesque. 
                        Semper imperdiet elit, nec faucibus varius dui. Lorem non 
                        sed tincidunt pharetra tempor. Amet proin sapien consequat orci,
                        mauris.Lorem ipsu elit.\amet, porttitor.</p>
                    <div className={styles.btn_wrapper}>
                        <button className={styles.btn}>Learn More...</button>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default OurTeam;