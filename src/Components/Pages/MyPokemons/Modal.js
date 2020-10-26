import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllBookmarks, setAlert } from "../../../Actions/index";

const Modal = () => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(deleteAllBookmarks());
    dispatch(setAlert("warning", "All items were removed"));
  };
  return (
    <div
      className="modal fade"
      id="areyousureModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Are you sure?
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">You are gonna loose all your data</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={removeHandler}
            >
              Sure!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
