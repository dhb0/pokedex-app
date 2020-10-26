export const paginationReducer = (
  state = 0,
  { type, payload }
) => {
  switch (type) {
    case "NEXT_PAGINATION": {
      return state +1 ;
    }
    case "PREVIOUS_PAGINATION": {
      return state - 1;
    }
    case "SET_PAGINATION_NUMBER": {
      return payload;
    }
    case "SET_SEARCH_KEY" : {
        return 0
    }
  }
  return state;
};
