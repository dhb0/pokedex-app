import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increasePagination,
  decreasePagination,
  setPagination,
} from "../../../Actions/index";

const Pagination = ({ length }) => {
  const currentPag = useSelector((state) => state.currentPagination);
  const dispatch = useDispatch();
  let pagItems = [];
  for (let i = 1; i <= length; i++) {
    pagItems.push(
      <li
        key={i}
        className={i - 1 === currentPag ? "page-item active" : "page-item"}
        onClick={() => dispatch(setPagination(i - 1))}
      >
        <a
          className="page-link"
          href="#"
          style={
            i === 1 || i === length
              ? { display: "block" }
              : Math.abs(currentPag - i) <= 3
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center flex-wrap">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => currentPag !== 0 && dispatch(decreasePagination())}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">{`<`}</span>
          </a>
        </li>
        {pagItems}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() =>
              currentPag < length - 1 && dispatch(increasePagination())
            }
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">{`>`}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
