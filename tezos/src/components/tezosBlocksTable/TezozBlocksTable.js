import React, { Component } from 'react';

import axios from 'axios';

import styles from './TezosBlocksTable.module.css';

export default class BlockTable extends Component {
    state = {
        array: []
    };

    componentDidMount() {
        axios 
        .get('https://api.teztracker.com/v2/data/tezos/mainnet/blocks')
        .then(response => {
            this.setState({
                array: response.data
            });
        });
    }

render() {

    const {array} = this.state

    return (
        <>
        <div className={styles.block}>
                <p className={styles.block_header}>Tezos blocks</p>
                    <table>                        
                        <thead  className={styles.item_wrapper}>
                          <tr>
                            <th>
                                <div className={styles.item_title}>Block ID (level)</div>                                
                            </th>
                            <th>
                                <div className={styles.item_title}>Baker</div>
                            </th>
                            <th>
                                <div className={styles.item_title}>Created (timestamp)</div>
                            </th>
                            <th>
                                <div className={styles.item_title}># of operations</div>
                            </th>
                            <th>
                                <div className={styles.item_title}>Volume</div>
                            </th>
                            <th>
                                <div className={styles.item_title}>Fees</div>
                            </th>
                            <th>
                                <div className={styles.item_title}>Endorsements</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                            {array.slice(0, 15).map(item=>{
                                return(
                                    <>
                                  <tr>
                                    <td> 
                                        <div className={styles.row_title}>{item.level}</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>---</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>{item.timestamp}</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>{item.number_of_operations}</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>{item.volume}</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>{item.fees}</div>
                                    </td>
                                    <td>
                                        <div className={styles.row_title}>{item.endorsements}</div>
                                    </td>
                                  </tr>
                                  
                                  </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
    )
 };
}