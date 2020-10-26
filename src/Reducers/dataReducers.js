const INITIAL_STATE = [];

export const dataReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return payload;
    default:
      return state;
  }
};

export const isDataFetched = (state = false, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return true;
  }
  return state;
};

export const sortedData = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return JSON.parse(JSON.stringify(payload));
    case "FROM_A_TO_Z":
      return [...state].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    case "FROM_Z_TO_A":
      return [...state].sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    case "DEFAULT_SORTING": {
      return payload
    }
  }
  return state;
};
