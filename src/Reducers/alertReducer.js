const INITIAL_VALUE = { show: false, type: "", text: "" };

export const alertReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case "SET_ALERT":
      return payload;
    case "RESET_ALERT":
      return INITIAL_VALUE;
  }
  return state;
};
