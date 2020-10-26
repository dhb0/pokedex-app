import React from "react";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../../../Actions/index";

const InputField = () => {
  
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    dispatch(setSearchKey(e.target.value));
  };
  
  return (
    <div className="input-field mx-auto text-center">
      <label htmlFor="formBg1">Filter by query</label>
      <div className="md-form md-bg">
        <input
          type="text"
          id="formBg1"
          className="form-control"
          placeholder="Type something: balbasaur etc..."
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default InputField;
