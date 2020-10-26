export const fromAtoZ = () => {
  return {
    type: "FROM_A_TO_Z",
  };
};

export const fromZtoA = () => {
  return {
    type: "FROM_Z_TO_A",
  };
};

export const filterDataByName = (key) => {
  return {
    type: "FILTER_DATA_BY_NAME",
    payload: key,
  };
};

export const defaultSorting = (initialData) => {
  return {
    type: "DEFAULT_SORTING",
    payload: initialData,
  };
};
