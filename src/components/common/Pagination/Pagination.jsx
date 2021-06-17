import React from "react";
import styles from "./pagination.module.scss";

export const Pagination = (props) => {
  const {
    totalItemsCount,
    pageSize = 10,
    currentPage,
    pageChangeHandler,
  } = props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

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
      {pages
        .filter((page) => currentPage - 5 < page && page < currentPage + 5)
        .map((page) => (
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
        ))}
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
