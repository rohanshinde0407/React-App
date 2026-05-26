import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./DataTable.css";

export default function DataTable({ title, columns, data, actions, rowsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedData = data.slice(startIdx, startIdx + rowsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="data-table">
      <h3 className="data-table__title">{title}</h3>
      <div className="data-table__wrapper">
        <table className="data-table__table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="data-table__row-animate" style={{ animationDelay: `${rowIndex * 0.04}s` }}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="data-table__pagination">
          <span className="data-table__page-info">
            Showing {startIdx + 1}–{Math.min(startIdx + rowsPerPage, data.length)} of {data.length}
          </span>
          <div className="data-table__page-controls">
            <button
              className="data-table__page-btn"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            {pageNumbers.map((num) => (
              <button
                key={num}
                className={`data-table__page-btn ${currentPage === num ? "data-table__page-btn--active" : ""}`}
                onClick={() => goToPage(num)}
              >
                {num}
              </button>
            ))}
            <button
              className="data-table__page-btn"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {actions && (
        <div className="data-table__actions">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`data-table__btn data-table__btn--${action.variant || "outline"}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
