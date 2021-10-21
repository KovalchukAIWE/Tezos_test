import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlockList from '../components/BlockList';
import Pagination from '../components/Pagination';

import styles from './styles.module.css';

const GetBlocks = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const apiUrl = 'https://api.teztracker.com/v2/data/tezos/mainnet/blocks';
    const getArray = async () => {
      setLoading(true);
      const newArray = await axios.get(apiUrl);
      setArray(newArray.data);
      setLoading(false);
    };
    getArray();
  }, [setArray]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemIndex = array.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  function handleQuantityChange(e) {
    setItemsPerPage(e.target.value);
  }

  return (
    <>
      <div className={styles.block_wrapper}>
        <div className={styles.bg_image} />
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <div className={styles.logo} />
            <p className={styles.main_text}>Tezos Ukraine</p>
            <p className={styles.text}>Front-end development test assigment</p>
          </div>
          <div className={styles.wrapperBlock}>
            <h2 className={styles.page}>Page {currentPage}</h2>
            <p className={styles.block_header}>Blocks list</p>
            <p>Items per page</p>
            <select
              className={styles.select}
              defaultValue={itemsPerPage}
              onChange={handleQuantityChange}
            >
              <option defaultValue="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <BlockList array={currentItemIndex} loading={loading} />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={array.length}
              paginate={paginate}
            />
            <div className={styles.buttons}>
              <button
                className={styles.button}
                type="button"
                onClick={prevPage}
              >
                prev
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={nextPage}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orangeBorder} />
    </>
  );
};

export default GetBlocks;
