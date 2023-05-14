import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PER_PAGE_COUNT } from "./Constants";
const Pagination = ({ page, isPreviousData, setPage, totalPage }) => {
  const pageCount = Math.ceil(totalPage / PER_PAGE_COUNT);

  return (
    <nav>
      <ul className="pagination ">
        <li className="page-item">
          <button
            className="page-link  mx-1 rounded-3"
            disabled={page === 1 || isPreviousData}
            onClick={() => setPage((page) => (page -= 1))}
          >
            <FaChevronLeft />
          </button>
        </li>
        <li className="page-item ">
          <button className="page-link  mx-1 rounded-3 active">{page}</button>
        </li>

        <li className="page-item">
          <button
            className="page-link mx-1 rounded-3"
            onClick={() => setPage((page) => (page += 1))}
            disabled={page === pageCount || isPreviousData}
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
