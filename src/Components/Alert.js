import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetAlert } from "../Actions/index";

const Alert = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetAlert());
    }, [4000]);
  }, [alert.text]);
  return (
    <div className={`alert alert-${alert.type} text-center m-auto`} role="alert">
      {alert.text}
    </div>
  );
};

export default Alert;
