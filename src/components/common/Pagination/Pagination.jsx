import React from "react";
import styles from "./pagination.module.scss";

export const Pagination = (props) => {
  const { pagesCount, currentPage, pageChangeHandler } = props;

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <div
          className={styles.pagination__item}
          onClick={() => pageChangeHandler(currentPage - 1)}
        >
          &#10094;
        </div>
      )}
      {pages.map((page) => {
        if (currentPage - 4 < page && page < currentPage + 4) {
          return (
            <div
              key={page}
              className={
                currentPage === page
                  ? `${styles.pagination__item} ${styles.pagination__item_selected}`
                  : styles.pagination__item
              }
              onClick={() => pageChangeHandler(page)}
            >
              {page}
            </div>
          );
        } else {
          return null;
        }
      })}
      {currentPage < pagesCount && (
        <div
          className={styles.pagination__item}
          onClick={() => pageChangeHandler(currentPage + 1)}
        >
          &#10095;
        </div>
      )}
    </div>
  );
};

export default Pagination;
