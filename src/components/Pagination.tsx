import "./styles/Pagination.css";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

// Pagination component with left/right nav and dynamic page buttons
export default function Pagination({ totalPages, currentPage, onPageChange }: Props) {
  const renderPages = () => {
    const pages = [];
    const maxVisible = 4;

    // Display visible pages and final page with dots if needed
    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-page ${i === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxVisible) {
      pages.push(<span key="dots" className="pagination-dots">...</span>);
      pages.push(
        <button
          key={totalPages}
          className="pagination-page"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      {/* Previous arrow */}
      <button
        className="pagination-nav"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <svg className="pagination-arrow" viewBox="0 0 24 24">
          <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {renderPages()}

      {/* Next arrow */}
      <button
        className="pagination-nav"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <svg className="pagination-arrow" viewBox="0 0 24 24">
          <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
}
