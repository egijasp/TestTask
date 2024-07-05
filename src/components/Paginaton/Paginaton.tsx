import "./Paginaton.scss";
import { FC } from "react";

type PaginatonProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
};

const Paginaton: FC<PaginatonProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination_button"
      >
        <i className="material-symbols-outlined small">
          keyboard_double_arrow_left
        </i>
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination_button ${
            currentPage === index + 1 ? "active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination_button"
      >
        <i className="material-symbols-outlined small">
          keyboard_double_arrow_right
        </i>
      </button>
      {/* <select
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        className="pagination__select"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select> */}
    </div>
  );
};

export default Paginaton;
