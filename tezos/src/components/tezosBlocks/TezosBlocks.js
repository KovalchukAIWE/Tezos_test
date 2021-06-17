import React from 'react';

import BlockTable from '../tezosBlocksTable/TezozBlocksTable';

import styles from '../tezosBlocks/TezosBlocks.module.css';

const BlockApi = () => {
    return (
        <div className={styles.block_wrapper}>
             <div className={styles.bg_image}/>
             <div className={styles.wrapper}>
                 <div className={styles.description}>
                     <div className={styles.logo}/>
                     <p className={styles.main_text}>Tezos Ukraine</p>
                     <p className={styles.text}>Front-end development test assigment</p>
                 </div>
                <BlockTable/>
                 </div>
                    <div className={styles.orangeBorder}/>
                </div>
    )
}

export default BlockApi;