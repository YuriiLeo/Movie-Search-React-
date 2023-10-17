import React from 'react';
import { PageNumber, PaginationWrapper } from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const firstPages = pageNumbers.slice(0, 5);

  const lastPages = pageNumbers.slice(-2);

  return (
    <PaginationWrapper>
      {firstPages.map(pageNumber => (
        <PageNumber
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </PageNumber>
      ))}

      {currentPage < 5 && totalPages > 10 && (
        <>
          <span>...</span>
          {lastPages.map(pageNumber => (
            <PageNumber
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={pageNumber === currentPage ? 'active' : ''}
            >
              {pageNumber}
            </PageNumber>
          ))}
        </>
      )}

      {currentPage >= 5 && totalPages > 10 && (
        <>
          {pageNumbers[currentPage - 3] > 6 && <span>...</span>}
          {pageNumbers
            .slice(currentPage - 3, currentPage + 2)
            .map(pageNumber => (
              <PageNumber
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={pageNumber === currentPage ? 'active' : ''}
              >
                {pageNumber}
              </PageNumber>
            ))}
          {pageNumbers[currentPage + 2] < totalPages - 1 && <span>...</span>}
          {lastPages.map(pageNumber => (
            <PageNumber
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={pageNumber === currentPage ? 'active' : ''}
            >
              {pageNumber}
            </PageNumber>
          ))}
        </>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
