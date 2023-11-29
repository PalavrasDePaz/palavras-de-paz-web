import React from "react";

const Paginator = (pageInfo, onPageChange) => {
  const { page, hasNextPage, hasPreviousPage } = pageInfo;

  const handlePageChange = (newPage) => {
    if (newPage !== page && onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={!hasPreviousPage}
      >
        Previous
      </button>
      <span> Page {page} </span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
