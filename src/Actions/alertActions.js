export const setAlert = (type, text) => {
  return {
    type: "SET_ALERT",
    payload: { show: true, type, text },
  };
};

export const resetAlert = () => {
  return {
    type: "RESET_ALERT",
  };
};
