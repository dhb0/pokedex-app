
const INITIAL_BOOKMARKS = localStorage.getItem("bookmarks")
  ? JSON.parse(localStorage.getItem("bookmarks"))
  : [];

export const bookmarkReducer = (
  state = INITIAL_BOOKMARKS,
  { type, payload }
) => {
  switch (type) {
    case "ADD_TO_BOOKMARK": {
      return [...state, payload];
    }
    case "DELETE_FROM_BOOKMARK": {
      return [...state].filter((item) => item.id !== payload);
    }
    case "DELETE_ALL_BOOKMARKS": {
      return [];
    }
  }
  return state;
};
