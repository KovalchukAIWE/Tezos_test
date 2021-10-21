import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pages}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className={styles.link}
              href={currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
